<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>software.xsl</title>
                <style>
                    h1{
                    text-align: center;
                    }
                    
                    div{
                    background-color: lightpink;
                    }
                    
                    td{
                    padding: 10px;
                    }
                    li{
                    padding-bottom: 10px;
                    }
                </style>
            </head>
            <body>
                <div>
                    <h1>DISTRIBUCIONES DE SOFTWARE LIBRE</h1>
                    <table>
                        <xsl:for-each select="software-libre/distribuciones/distribucion">
                            <tr>
                                <td>
                                    <strong><xsl:value-of select="nombre"/></strong>
                                </td>
                                <td>
                                    <xsl:value-of select="web"/>
                                </td>
                                <td>
                                    <xsl:value-of select="nacimiento"/>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </table>
                    <br/>
                    
                    <ul>
                        <xsl:for-each select="software-libre/escritorios/escritorio">
                            <li>
                                <strong>
                                    <xsl:value-of select="nombre"/>
                                </strong>
                                 (<xsl:value-of select="web"/>), aparecido en 
                                <xsl:value-of select="nacimiento"/>
                            </li>
                        </xsl:for-each>
                    </ul>
                </div>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
