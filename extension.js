({
    name: "beetlecar",
    description: "",
    author: "UP-SKILL",
    category: "",
    version: "1.0.0",
    icon: "/static/beetlecar.png",
    color: "#4A7CCC",
    blocks: [
        
        {
            xml: '<label text="Motor"></label>'
            
        },
        
        //"switch_on_release_beetle",
        //"switch_is_press_beetle",
        //"switch_is_release_beetle",
        //"switch_get_value_beetle",
        
        
        
        
        
                                 //Motor 2.0 End ///////////////////////////////////
                                {
                                    xml: `
                                    <block type="new_motor">
                                        <field name="move">0</field>
                                        <field name="speed">180</field>
                                    </block>
                                `
                                },
                                {
                                    xml: `
                                    <block type="new_motor2">
                                        <field name="move">0</field>
                                        <field name="speed">180</field>
                                        <field name="time">0</field>
                                    </block>
                                `
                                },
                                {
                                    xml: `
                                    <block type="new_motor3">
                                        <field name="motor">0</field>
                                        <field name="move">0</field>
                                        <field name="speed">200</field>
                                    </block>
                                ` 
                                },

                                "newstopMotor",

                                //Motor 2.0 End ///////////////////////////////////


                                //Ultrasonic Start //////////////////////////// 
                                {
                                    xml: '<label text="Ultrasonic"></label>'
                                },
                               'ultra_read',
                                {
                                    xml:`    
                                        <block type="ultra_read_if">
                                            <value name="math">
                                                <shadow type="math_number">
                                                    <field name="NUM">>=</field>
                                                </shadow>
                                            </value>
                                            <value name="read_num">
                                                <shadow type="math_number">
                                                    <field name="NUM">5</field>
                                                </shadow>
                                            </value>
                                        </block>`
                                },
                                //Ultrasonic End ///////////////////////////////
                                
                                //Switch START /////////////////////////////////
                                {
                                    xml: '<label text="Switch"></label>',
                                },
                                "switch_on_press_beetle",
                                {
                                    xml:`
                                        <block type = "switch">
                                            <value name = "pin">
                                                <shadow type = "math_number">
                                                    <field name = "NUM">SW A</field>
                                                </shadow>
                                            </value>
                                        </block>
                                    `
                                },
                                
                                {
                                    xml: '<label text="Toggle Switch"></label>',
                                },

                                {
                                    xml:`
                                        <block type = "switch_toggle">
                                            <value name = "pin">
                                                <shadow type = "math_number">
                                                    <field name = "NUM">SW A</field>
                                                </shadow>
                                            </value>
                                        </block>
                                    `
                                },
                                //Switch STOP /////////////////////////////////
                  
                                //servo Start//////////////////////////////////
                                {
                                    xml: '<label text="Servo"></label>', 
                                },

                            
                                {
                                    xml: `
                                        <block type="servo">  
                                            <value name="pin">
                                                <shadow type="math_number">
                                                    <field name="NUM">16</field>
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
                                //servo End //////////////////////////////////

                                //LED Start //////////////////////////////////

                                {
                                    xml: '<label text="LED"></label>'
                                },
                                {
                                    xml: `
                                    <block type="led_left">
                                        <value name="pin_trig">
                                            <shadow type="math_number">
                                                <field name="NUM">Left ON</field>
                                            </shadow>
                                        </value>
                                    </block>
                                `
                                },
                                {
                                    xml: `
                                    <block type="led_right">
                                        <value name="pin_trig">
                                            <shadow type="math_number">
                                                <field name="NUM">Right ON</field>
                                            </shadow>
                                        </value>
                                    </block>
                                `
                                },
                                //LED END //////////////////////////////////
        
                                //NeoPixel  START ///////////////////////////
                                {
                                    xml:'<label text="NeoPixel"></label>'
                                },

                                    "neopixel_fill_color1",
                                    "neopixel_off",
                                    "neopixel_toggle",
                                    "rainbow_neo",
        
                            //NeoPixel  END ///////////////////////////

                            //Buzzer  START ///////////////////////////
                            {
                                xml: '<label text="Buzzer"></label>', 
                            },
         
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
                            {
                                xml: `
                                    <block type="buzzer2">
                                        <value name="freq">
                                            <shadow type="math_number">
                                                <field name="NUM">1000</field>
                                            </shadow>
                                        </value>
                                    </block>
                                `
                            },
                                "buzzer3",
                            {
                                xml: `
                                    <block type="buz_play_music">
                                        <value name="music">
                                            <shadow type="math_number">
                                                <field name="NUM">Happy Birth Day</field>
                                            </shadow>
                                        </value>
                                    </block>
                                `
                            },
                            //Buzzer End /////////////////////////////////

                            //Line Tracking START ////////////////////////
                            {
                            xml: '<label text="Line Tracking"></label>'
                            },
                            //"line_sensor",
                            /*{
                                xml: `
                                    <block type="linetracking_threshold">
                                        <field name="black">0</field>
                                        <field name="white">0</field>
                                    </block>
                                `
                            },
                            
                            {
                                xml: `
                                    <block type="linetracking_sensor">
                                        <field name="sensor">0</field>
                                        <field name="operator">0</field>
                                    </block>
                                `
                            },*/

                            "line_sensor_if",
                           
                            "line_sensor_if3",
                            {
                                xml: `
                                    <block type="set_ssr_ssl">
                                        <field name="ssr_ssl">0</field>
                                        <field name="pin">0</field>
                                    </block>
                                `
                            },
                            
                           
                            //Line Tracking END ////////////////////////

                            //IR START /////////////////////////////////
                            {
                                xml: '<label text="IR Signal"></label>',
                            },
                                    "ir_sig_new2",
                                    "ir_comman_if",
                                    "ir_read",

                             //IR end //////////////////////////////////

                            //Task START ////////////////////////////////

                            {
                                xml: '<label text="Task"></label>',
                            },
                                    "run_in_background",

                            //Task END //////////////////////////////////
                            ]
                                        
    
});
