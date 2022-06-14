<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>geografia.xsl</title>
                <style type="text/css">
                    div{
                    background-color: #f5dfb5;
                    }
                    
                    table{
                    border-size: 0;
                    }
                    
                    tr{
                    padding-right: 30px;
                    }
                </style>
            </head>
            <body>
                <div>
                    <h1>Paises</h1>
                    <xsl:for-each select="geografia/continentes/continente/pais">
                        <p>
                            <xsl:value-of select="."/>
                        </p>
                    </xsl:for-each>
                    
                    <h1>Ríos</h1>
                    <xsl:for-each select="geografia/rios/rio">
                        <table>
                            <td>
                                <tr>
                                    <strong>
                                        <xsl:value-of select="nombre"/>
                                    </strong>
                                </tr>
                            </td>
                            <xsl:for-each select="pais">
                                <td>
                                    <tr>
                                        <xsl:value-of select="."/>
                                    </tr>
                                </td>
                            </xsl:for-each>
                        </table>
                    </xsl:for-each>
                </div>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
