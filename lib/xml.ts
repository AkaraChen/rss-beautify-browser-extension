export const isXmlPage = () => {
    const viewer = document.getElementById('webkit-xml-viewer-source-xml')
    return !!viewer
}

export const getRssElement = () => {
    const collection = document.getElementsByTagName('rss')
    if (!collection.length) {
        return null
    }
    const element = collection[0]
    return element;
}

export const getXMLType = () => {
    const element = getRssElement()
    if (!element) {
        return XmlType.other
    }
    const ns = element.getAttribute('xmlns:atom')
    return ns ? XmlType.atom : XmlType.rss
}

export enum XmlType {
    atom,
    rss,
    other
}
