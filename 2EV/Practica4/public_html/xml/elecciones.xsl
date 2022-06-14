<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>elecciones.xsl</title>
                <style>
                    body{
                    background-color: lightyellow;
                    }
                    
                    h2{
                    text-decoration: underline;
                    }
                    
                    td{
                    padding: 2px;
                    }
                </style>
            </head>
            <body>
                <h1>Escaños en elecciones europeas</h1>
                <br/>
                <xsl:for-each select="elecciones/eleccion">
                    <h2>
                        <xsl:value-of select="año"/>
                    </h2>
                    <table>
                        <xsl:for-each select="resultados/partido">
                            <tr>
                            
                                <td>
                                    <xsl:value-of select="nombre"/>
                                </td>
                                <td>
                                    <xsl:value-of select="escaños"/>
                                </td>
                            
                            </tr>
                        </xsl:for-each>
                    </table>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
