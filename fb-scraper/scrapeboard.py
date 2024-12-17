from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
import re
import csv
import json

class FacebookPostScraper:
    def __init__(self, csv_file):
        self.csv_file = csv_file
        self.final_data = []

        # Set up headless 
        options = Options()
        # options.add_argument("--headless")

        self.driver = webdriver.Chrome(options=options)

    def open_post(self, url):
        """Open a Facebook post URL."""
        self.driver.get(url)
        try:
            WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.CLASS_NAME, "x5yr21d.x4l50q0"))
            )
        except Exception as e:
            print(f"Error loading post: {e}")
        finally:
            webdriver.ActionChains(self.driver).send_keys(Keys.ESCAPE).perform()

    @staticmethod
    def calculate_points(likes, shares):
        """Calculate points based on likes and shares."""
        return likes * 2 + shares * 5

    def scrape(self):
        """Scrape data from the list of Facebook post links."""
        with open(self.csv_file, "r") as file:
            csv_reader = csv.DictReader(file)

            for row in csv_reader:
                url = row.get("link", "").strip()
                author = row.get("author", "Unknown")
                text = row.get("text", "")

                if not url:
                    print("Skipping row with no link.")
                    continue

                self.open_post(url)

                try:
                    reactions_element = self.driver.find_element(
                        By.CSS_SELECTOR,
                        "div.x1n2onr6 > div > div.x6s0dn4.x78zum5.x1iyjqo2.x6ikm8r.x10wlt62 > span.xrbpyxo.x6ikm8r.x10wlt62.xlyipyv.x1exxlbk > span > span"
                    )
                    no_of_reactions = int(reactions_element.text.replace(",", ""))
                except Exception:
                    no_of_reactions = 0

                try:
                    try:
                        shares_element = self.driver.find_element(
                            By.CSS_SELECTOR,
                            "div.x1n2onr6 > div > div.x9f619.x1ja2u2z.x78zum5.x2lah0s.x1n2onr6.x1qughib.x1qjc9v5.xozqiw3.x1q0g3np.xykv574.xbmpl8g.x4cne27.xifccgj > div:nth-child(2) > span > div > div > div:nth-child(1) > span > span"
                        )
                    except Exception:
                        shares_element = self.driver.find_element(
                            By.CSS_SELECTOR,
                            "div > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.xeuugli.x2bj2ny.x85a59c.x1t2pt76.x12slza2.x1dqk2q1.x1mnsmir > div > div > div > div.x78zum5.xdt5ytf.x1iyjqo2.x1n2onr6 > div:nth-child(2) > div > div.x1n2onr6 > div > div.x9f619.x1ja2u2z.x78zum5.x2lah0s.x1n2onr6.x1qughib.x1qjc9v5.xozqiw3.x1q0g3np.xykv574.xbmpl8g.x4cne27.xifccgj > div > span > div > div > div:nth-child(1) > span > span"
                        )
                    finally:
                        shares_text = shares_element.text
                        if "K" in shares_text:
                            no_of_shares = int(float(shares_text.replace("K", "")) * 1000)
                        else:
                            no_of_shares = int(shares_text.replace(",", ""))
                except Exception as e:
                    no_of_shares = 0

                try:
                    image_element = self.driver.find_element(
                        By.CSS_SELECTOR,
                        "div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x193iq5w.xeuugli.x1r8uery.x1iyjqo2.xs83m0k.xtp0wl1.xadl8oe > div > div.x78zum5.xdt5ytf.x1iyjqo2.x5yr21d.x17upfok.x1n2onr6.x1uvtmcs.xal61yo > div > div.x6s0dn4.x78zum5.x1n2onr6.xtp0wl1.xwot789 > div > div > div > img"
                    )
                    image_url = image_element.get_attribute("src")
                except Exception:
                    image_url = ""

                points = self.calculate_points(no_of_reactions, no_of_shares)

                print(f"Link: {url}, Reactions: {no_of_reactions}, Shares: {no_of_shares}, Points: {points}")

                self.final_data.append({
                    "Author": author,
                    "Text": text,
                    "PostLink": url,
                    "NumberOfReactions": no_of_reactions,
                    "NumberOfShares": no_of_shares,
                    "Image": image_url,
                    "Points": points,
                })

        return self.final_data

    def save_to_json(self, output_file):
        """Save scraped data to a JSON file."""
        with open(output_file, "w") as json_file:
            json.dump({"posts": self.final_data}, json_file, indent=4)

    def close(self):
        """Close the WebDriver."""
        self.driver.quit()

if __name__ == "__main__":
    scraper = FacebookPostScraper("links.csv")
    try:
        data = scraper.scrape()
        scraper.save_to_json("data.json")
    finally:
        scraper.close()
