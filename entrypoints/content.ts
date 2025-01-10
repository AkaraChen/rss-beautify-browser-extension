import { getXMLType, isXmlPage, XmlType } from "@/lib/xml";

export default defineContentScript({
  matches: ['<all_urls>'],
  async main() {
    const isXml = isXmlPage()
    if (!isXml) {
      return
    }
    const xmlType = getXMLType()
    if (xmlType === XmlType.other) {
      return
    }
    const newUrl = new URL('https://rss.beauty/rss')
    newUrl.searchParams.set('url', window.location.href)
    window.location.href = newUrl.href
  },
});
