({
    name: "Warp IoT",
    description: "",
    author: "UP-SKILL",
    category: "",
    version: "1.0.0",
    icon: "/static/beetlecar.png",
    color: "#4A7CCC",
    blocks: [
        
                        {
                            xml: '<label text="LED"></label>',
                        },
                        "poten_ifelse2",
                        {
                            xml: `
                                <block type="ledset">
                                    <value name="ledpin">
                                        <shadow type="math_number">
                                            <field name="NUM">18</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: '<label text="Switch"></label>',
                        },
                        "switch_iot",
                        {
                            xml:'<label text="NeoPixel"></label>'
                        },
                            
                            "neopixel_fill_color1_neo",
                            "neopixel_off_iot",
                            "neopixel_toggle_iot",
                            "rainbow_neo_iot",
                            {
                                xml: `
                                    <block type="set_neopi">
                                        <value name="pin">
                                            <shadow type="math_number">
                                                <field name="NUM">16</field>
                                            </shadow>
                                        </value>
                                        <value name="lenght">
                                            <shadow type="math_number">
                                                <field name="NUM">3</field>
                                            </shadow>
                                        </value>
                                    </block>
                                `
                            },
                        {
                            xml: '<label text="Potentio"></label>',
                        },
                        {
                            xml: `
                                <block type="read_poten">
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">34</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="poten_ifelse">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">200</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="if_poten">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">200</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        
                        
                        
                        {
                            xml: '<label text="DHT22"></label>',
                        },
                        {
                            xml: `
                                <block type="dhtrun">
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">18</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        
                        
                    
                      
                            

                    //NeoPixel  END ///////////////////////////
                    {
                        xml:'<label text="OLED"></label>'
                    },
                    "oled_init_iot",
                    {
                        xml: `
                            <block type="oled_draw_text_iot">
                                <value name="text">
                                    <shadow type="text">
                                        <field name="TEXT">Hello!</field>
                                    </shadow>
                                </value>
                                <value name="x">
                                    <shadow type="math_number">
                                        <field name="NUM">0</field>
                                    </shadow>
                                </value>
                                <value name="y">
                                    <shadow type="math_number">
                                        <field name="NUM">0</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    {
                        xml: '<label text="Buzzer"></label>',
                    },
                    "buz_play_music",
                    {
                        xml: `
                            <block type="buzzer1">
                                <value name="freq">
                                    <shadow type="math_number">
                                        <field name="NUM">1000</field>
                                    </shadow>
                                </value>
                                <value name="time">
                                    <shadow type="math_number">
                                        <field name="NUM">1</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    /*{
                        xml: `
                            <block type="buzzer2">
                                <value name="freq">
                                    <shadow type="math_number">
                                        <field name="NUM">1000</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },*/
                    "buzzer3",
                    {
                        xml: `
                            <block type="buzzer_set_pin">
                                <value name="pin">
                                    <shadow type="math_number">
                                        <field name="NUM">23</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                   
                    {
                        xml: '<label text="Delay"></label>',
                    },
                    {
                        xml: `
                            <block type="delaysec">
                                <value name="time">
                                    <shadow type="math_number">
                                        <field name="NUM">1</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    {
                        xml: `
                            <block type="delaymilli">
                                <value name="timems">
                                    <shadow type="math_number">
                                        <field name="NUM">100</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    /*{
                        xml: '<label text="Operation"></label>',
                    },
                    {
                        xml: `
                            <block type="logic_compare">
                                <value name="A">
                                    <shadow type="math_number">
                                        <field name="NUM">5</field>
                                    </shadow>
                                </value>
                                <field name="OP">EQ</field>
                                <value name="B">
                                    <shadow type="math_number">
                                        <field name="NUM">5</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    "logic_operation",
                    */
                 
                    {
                        xml: '<label text="MotorDC"></label>',
                    },
                    {
                        xml: `
                            <block type="motordcset">
                                <value name="motordcpluspin">
                                    <shadow type="math_number">
                                        <field name="NUM">12</field>
                                    </shadow>
                                </value>
                                <value name="motordcminuspin">
                                    <shadow type="math_number">
                                        <field name="NUM">13</field>
                                    </shadow>
                                </value>                
                            </block>
                        `
                    },
                    "motordcrun",
                    {
                        xml: '<label text="Servo"></label>',
                    },
                    {
                        xml: `
                            <block type="servoeasy">
                                <value name="pin">
                                    <shadow type="math_number">
                                        <field name="NUM">14</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    {
                        xml: `
                            <block type="servohard">
                                <value name="pin">
                                    <shadow type="math_number">
                                        <field name="NUM">14</field>
                                    </shadow>
                                </value>
                                <value name="angle">
                                    <shadow type="math_number">
                                        <field name="NUM">90</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                
                
                    
                   {
                        xml: '<label text="LDR"></label>',
                    },
                    {
                        xml: `
                            <block type="ldrrun">
                                <value name="pin">
                                    <shadow type="math_number">
                                        <field name="NUM">32</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    {
                        xml: '<label text="Proximity"></label>',
                    },
                    {
                        xml: `
                            <block type="proximityrun">
                                <value name="pin">
                                    <shadow type="math_number">
                                        <field name="NUM">19</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    {
                        xml: '<label text="Rotary Encoder"></label>',
                    },
                    {
                        xml: `
                            <block type="rotaryset">
                                <value name="pinclk">
                                    <shadow type="math_number">
                                        <field name="NUM">16</field>
                                    </shadow>
                                </value>
                                <value name="pindt">
                                    <shadow type="math_number">
                                        <field name="NUM">27</field>
                                    </shadow>
                                </value>
                                <value name="pinsw">
                                    <shadow type="math_number">
                                        <field name="NUM">14</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    "rotaryget",
                    "rotaryrun",
                    {
                        xml: '<label text="PM Sensor"></label>',
                    },
                    {
                        xml: `
                            <block type="pmsetting">
                                <value name="pintx">
                                    <shadow type="math_number">
                                        <field name="NUM">13</field>
                                    </shadow>
                                </value>
                                <value name="pinrx">
                                    <shadow type="math_number">
                                        <field name="NUM">12</field>
                                    </shadow>
                                </value>                    
                            </block>
                        `
                    },
                    "pmgetting",
                    "pmrunning",
                    {
                        xml: '<label text="Relay"></label>',
                    },
                    {
                        xml: `
                            <block type="relayset">
                                <value name="relaypin">
                                    <shadow type="math_number">
                                        <field name="NUM">26</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    {
                        xml: '<label text="RFID"></label>',
                    },
                    {
                        xml: `
                            <block type="rfidset">
                                <value name="pinscl">
                                    <shadow type="math_number">
                                        <field name="NUM">22</field>
                                    </shadow>
                                </value>
                                <value name="pinsda">
                                    <shadow type="math_number">
                                        <field name="NUM">21</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    "rfidget",
                    "rfidrun",
                    "rfidreset",
                    /*Todayyyy*/
                    {
                        xml: '<label text="WIFI"></label>',
                    },
                    {
                        xml: `
                            <block type="wifi_setting">
                                <value name="ssid">
                                    <shadow type="text">
                                        <field name="TEXT"> wifi name </field>
                                    </shadow>
                                </value>
                                <value name="pass">
                                    <shadow type="text">
                                        <field name="TEXT"> password </field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    "wifi_waiting",
                    "wifi_connect",
                    {
                        xml: '<label text="Thingsboard"></label>',
                    },
                    {
                        xml: `
                            <block type="thingsboard_setting">
                                <value name="token">
                                    <shadow type="text">
                                        <field name="TEXT"> token </field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    "thingsboard_connect",
                    {
                        xml: `
                            <block type="thingsboard_sender">
                                <value name="widget">
                                    <shadow type="text">
                                        <field name="TEXT">your widget</field>
                                    </shadow>
                                </value>
                                <value name="value">
                                    <shadow type="text">
                                        <field name="TEXT">your value</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    {
                        xml: '<label text="LCD"></label>',
                    },
                    {
                        xml: `
                            <block type="lcdsetting">
                                <value name="pinsck">
                                    <shadow type="math_number">
                                        <field name="NUM">18</field>
                                    </shadow>
                                </value>
                                <value name="pinmosi">
                                    <shadow type="math_number">
                                        <field name="NUM">23</field>
                                    </shadow>
                                </value>
                                <value name="pindc">
                                    <shadow type="math_number">
                                        <field name="NUM">17</field>
                                    </shadow>
                                </value>
                                <value name="pincs">
                                    <shadow type="math_number">
                                        <field name="NUM">5</field>
                                    </shadow>
                                </value>
                                <value name="pinrst">
                                    <shadow type="math_number">
                                        <field name="NUM">1</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    {
                        xml: `
                            <block type="lcdshow">
                                <value name="xaxis">
                                    <shadow type="math_number">
                                        <field name="NUM">0</field>
                                    </shadow>
                                </value>
                                <value name="yaxis">
                                    <shadow type="math_number">
                                        <field name="NUM">0</field>
                                    </shadow>
                                </value>
                                <value name="showtext">
                                    <shadow type="text">
                                        <field name="TEXT">Hello!</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    "lcdclear",
                    {
                        xml: '<label text="Stepper Motor"></label>',
                    },
                    {
                        xml: `
                            <block type="stepsetting">
                                <value name="pindir">
                                    <shadow type="math_number">
                                        <field name="NUM">12</field>
                                    </shadow>
                                </value>
                                <value name="pinstep">
                                    <shadow type="math_number">
                                        <field name="NUM">14</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    {
                        xml: `
                            <block type="stepdrive">      
                                <value name="step">
                                    <shadow type="math_number">
                                        <field name="NUM">200</field>
                                    </shadow>
                                </value>              
                                <value name="delay">
                                    <shadow type="math_number">
                                        <field name="NUM">2000</field>
                                    </shadow>
                                </value>
                                <value name="accel">
                                    <shadow type="math_number">
                                        <field name="NUM">5</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    "stepstop",
                    //todayyyyy 2/10/2566
                    
                                        

        
    ]
                                        
    
});
