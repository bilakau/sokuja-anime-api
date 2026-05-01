/**
 * Sokuja Scraper - Core Module
 * Complete Anime Scraper
 */

const axios = require('axios');
const cheerio = require('cheerio');

class SokujaSCRAPER {
  constructor() {
    this.baseUrl = 'https://x5.sokuja.uk';
  }

  async getHome() {
    if (typeof window !== 'undefined') {
      return { success: false, error: 'Cannot run in browser' };
    }
    try {
      const response = await axios.get(this.baseUrl);
      return { success: true, data: response.data };
    } catch (error){
      return { success: false, error: error.message };
    }
  }
}

module.exports = SokujaSCRAPER;