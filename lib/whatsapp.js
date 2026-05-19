/**
 * Utility for generating clean WhatsApp URLs
 * Strips out problematic characters (like quotes) that break URL encoding
 */

export const WHATSAPP_NUMBERS = {
  MAIN: '918146330346',
  TRAINING: '917508535271'
};

export function getWhatsAppUrl(phone, text) {
  if (!phone) return '#';
  
  // Clean the text by removing quotes that might break encoding or cause issues
  const cleanText = text.replace(/['"`]/g, '').trim();
  
  return `https://wa.me/${phone}?text=${encodeURIComponent(cleanText)}`;
}
