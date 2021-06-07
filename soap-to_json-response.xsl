<?xml version="1.0" encoding="UTF-8"?>
<!--	Transforms the SOAP response into JSON of the form {"daysToChristmas": 339}
		Author: Steve Edwards, Escala Ltd.
		Date  : 2015-02-04.
		Note  : this code is for demonstration purposes only, not production - level.
-->
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output omit-xml-declaration="yes" method="text"/>
	<xsl:template match="/">
		<xsl:variable name="daysToChristmasResult"
		              select="/*[local-name()='Envelope']/*[local-name()='Body']/*[local-name()='daysToChristmasResponse']/return/text()"/>
		<xsl:variable name="json-result">{"daysToChristmas": <xsl:value-of select="$daysToChristmasResult"/>}</xsl:variable>
		<xsl:copy-of select="normalize-space($json-result)"></xsl:copy-of>
	</xsl:template>
</xsl:stylesheet>