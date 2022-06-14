<?xml version="1.0" encoding="UTF-8"?>


<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>
    <xsl:template match="/">
        <html>
            <head>
                <title>leyes.xsl</title>
                <style>
                    body{
                    background-color: lightblue;
                    }
                    
                    hr{
                    border: 2px blue solid;
                    }
                    
                    div{
                    background-color: white;
                    float: left;
                    width: 150px;
                    height: 150px;
                    margin: 1%;
                    }
                </style>
            </head>
            <body>
                <xsl:for-each select="leyes/murphy">
                    <hr></hr>
                    <h1>
                        <xsl:value-of select="tipo"/>
                    </h1>
                    <xsl:for-each select="ley">
                        <div>
                            <xsl:value-of select="."/>
                        </div>
                    </xsl:for-each>
                </xsl:for-each>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                
                <xsl:for-each select="leyes/ginsgberg">
                    <hr></hr>
                    <h1>
                        <xsl:value-of select="tipo"/>
                    </h1>
                    <xsl:for-each select="ley">
                        <div>
                            <xsl:value-of select="."/>
                        </div>
                    </xsl:for-each>
                </xsl:for-each>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                
                <xsl:for-each select="leyes/otras">
                    <hr></hr>
                    <h1>
                        <xsl:value-of select="tipo"/>
                    </h1>
                    <xsl:for-each select="ley">
                        <div>
                            <xsl:value-of select="."/>
                        </div>
                    </xsl:for-each>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
