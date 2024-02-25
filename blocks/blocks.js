Blockly.Msg.buttonA_Msg = "sw_a";
Blockly.Msg.buttonB_Msg = "sw_b";
Blockly.Msg.LED_LIFT_Msg = "left on";
Blockly.Msg.LED_RIGHT_Msg = "right on";
Blockly.Msg.LEFT_OFF = "left off";
Blockly.Msg.RIGHT_OFF = "right off";
Blockly.Msg.On_Msg = "on";
Blockly.Msg.OFF_Msg = "off";
Blockly.Msg.mt_sigh = ">";
Blockly.Msg.lt_sigh = "<";
//Blockly.Msg.eq_sigh = "==";
Blockly.Msg.happy = "happy birthday";
Blockly.Msg.darth_vader = "darth vader theme";
Blockly.Msg.jingle_bell = "jingle bell";
Blockly.Msg.mary_little_lamb = "mary had a little lamb";
Blockly.Msg.bitsy_spider  = "bitsy spider ";

Blockly.Msg.but1 = "1";
Blockly.Msg.but2 = "2";
Blockly.Msg.but3 = "3";
Blockly.Msg.but4 = "4";
Blockly.Msg.but5 = "5";
Blockly.Msg.but6 = "6";
Blockly.Msg.but7 = "7";
Blockly.Msg.but8 = "8";
Blockly.Msg.but9 = "9";
Blockly.Msg.but0 = "0";
Blockly.Msg.buttag = "#";
Blockly.Msg.butstar = "*";
Blockly.Msg.butup = "up";
Blockly.Msg.butdown = "down";
Blockly.Msg.butleft = "left";
Blockly.Msg.butright = "right";
Blockly.Msg.butokay = "OK";
Blockly.Msg.blacktext = "black";
Blockly.Msg.whitetext = "white";
Blockly.Msg.left = "left";
Blockly.Msg.right = "right";



Blockly.defineBlocksWithJsonArray([

  ////////MOTOR 2.0 Start ///////////


  {
    "type": "new_motor",
    "message0": "move %1 pwm %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "move",
        "options": [
          [
            "forward",
            "forward"
          ],
          [
            "backward",
            "backward"
          ],
          [
            "left",
            "left"
          ],
          [
            "right",
            "right"
          ]
        ]
      },
      {
        "type": "field_number",
        "name": "speed",
        "value": 0,
        "min": 0,
        "max": 1023
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "0277bd",
    "tooltip": "",
    "helpUrl": ""
  },
  
  {
    "type": "new_motor2",
    "message0": "move %1 pwm %2 for %3 sec",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "move",
        "options": [
          [
            "forward",
            "forward"
          ],
          [
            "backward",
            "backward"
          ],
          [
            "left",
            "left"
          ],
          [
            "right",
            "right"
          ]
        ]
      },
      {
        "type": "field_number",
        "name": "speed",
        "value": 0,
        "min": 0,
        "max": 1023
      },
      {
        "type": "field_number",
        "name": "time",
        "value": 0
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "0277bd",
    "tooltip": "",
    "helpUrl": ""
  },
  
  {
    "type": "stopMotor",
    "message0": "stopmotor",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "0277bd",
    "tooltip": "",
    "helpUrl": ""
  },
   {
    "type": "new_motor3",
    "message0": "motor %1 move %2 at speed %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "motor",
        "options": [
          [
            "left",
            "left"
          ],
          [
            "right",
            "right"
          ],
          [
            "all",
            "all"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "move",
        "options": [
          [
            "forward",
            "forward"
          ],
          [
            "backward",
            "backward"
          ]
        ]
      },
      {
        "type": "field_number",
        "name": "speed",
        "value": 204,
        "min": 0,
        "max": 1023
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "0277bd",
    "tooltip": "",
    "helpUrl": ""
  },

  
  {
    "type": "newstopMotor",
    "message0": "stopmotor",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "0277bd",
    "tooltip": "",
    "helpUrl": ""
  },

 ////////MOTOR 2.0 end ///////////

//Ultrasonic Start ///////////////////////////
{  
  "type": "ultra_read_if",
  "message0": "ultrasonic %1 %2 centimeter",
  "args0":[
  {
    "type": "field_dropdown",
    "name": "math",
    "options": [
      [Blockly.Msg.mt_sigh , ">"],
      [Blockly.Msg.lt_sigh , "<"],
      
    ]
  
  },
  {
    "type": "field_number",
    "name": "read_num",
    "check": "Number"
  }
], 
"output": ["Number", "Boolean"],
"inputsInline": true,
"colour": "00838f",
"tooltip": "",
"helpUrl": ""
},
{
  "type":"ultra_read",
  "message0": "ultrasonic read",
  
  
"output": ["Number", "Boolean"],
"inputsInline": true,
//"peviousStatement": null,
//"nextStatement": null,
"colour": "00838f",
"tooltip": "",
"helpUrl": ""
},

//Ultrasonic End /////////////////////////////

//Switch Start ///////////////////////////////

{
    
  "type":"switch",
      "message0": "switch: %1 on pressed",
      "args0":[
        {
          "type" : "field_dropdown",
          "name" : "pin",
          "options" : [
            [
              Blockly.Msg.buttonA_Msg , "18"
            ],
            [
              Blockly.Msg.buttonB_Msg , "5"
            ]
          ]
        }
      ],
    "output": ["Number", "Boolean"],
    "inputsInline": true,
    "colour": "00695c",
    "tooltip": "",
    "helpUrl": ""
    
    },
    {
      "type":"switch_toggle",
      "message0": "switch: %1 is on ",
      "args0":[
        {
          "type" : "field_dropdown",
          "name" : "pin",
          "options" : [
            [
              Blockly.Msg.buttonA_Msg , "18"
            ],
            [
              Blockly.Msg.buttonB_Msg , "5"
            ]
          ]
        }
      ],
    "output": ["Number", "Boolean"],
    "inputsInline": true,
    "colour": "00695c",
    "tooltip": "",
    "helpUrl": ""
    },
    


//Switch End /////////////////////////////////

//servo Start ////////////////////////////////
{
  "type": "servo", 
  "message0": "servo %1 set angle %2", 
  "args0": [
    {
     
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [
          "s1",
          "16"
        ],
        [
          "s2",
          "17"
        ]
      ]
    },
    {
     
      "type": "field_angle",
      "name": "angle",
      "angle": 90
    }
  ],
  

"previousStatement": null,
"nextStatement": null,
"colour": "0a7e07",
"tooltip": "",
"helpUrl": ""
},
//servo End //////////////////////////////////

//LED Start //////////////////////////////////
{        
            "type": "led_left",
            "message0": "LED: %1",
            "args0":[
            {
              "type": "field_dropdown",
              "name": "pin_trig",
              "options": [
                [Blockly.Msg.LED_LIFT_Msg , "1"],
                [Blockly.Msg.LEFT_OFF , "2"],
                
              ]
                
            }
          ], 
          "inputsInline": true,
          "previousStatement": null,
          "nextStatement": null,
          "colour": "7b1fa2",
          "tooltip": "",
          "helpUrl": ""
          
},
{        
            "type": "led_right",
            "message0": "LED: %1",
            "args0":[
            {
              "type": "field_dropdown",
              "name": "pin_trig",
              "options": [
                
                [Blockly.Msg.LED_RIGHT_Msg , "3"],                
                [Blockly.Msg.RIGHT_OFF , "4"]
              ]
                
            }
          ], 
          "inputsInline": true,
          "previousStatement": null,
          "nextStatement": null,
          "colour": "7b1fa2",
          "tooltip": "",
          "helpUrl": ""
          
},
      //LED End ////////////////////////////////////

      //neopixel Start /////////////////////////////
      {
        "type": "neopixel_fill_color1",
        "message0": "neopixel on color %1",
        "args0": [
          {
            "type": "field_colour",
            "name": "color",
            "colour": "#ff0000"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#148F77",
        "tooltip": "",
        "helpUrl": ""
      },

      {
        "type": "neopixel_toggle",
        "message0": "neopixel toggle color %1 : %2",
        "args0": [
          {
            "type": "field_colour",
            "name": "tog_color1",
            "colour": "#ff0000"
          },
          {
            "type": "field_colour",
            "name": "tog_color2",
            "colour": "0000ff"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#148F77",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "rainbow_neo",
        "message0": "neopixel rainbow",
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#148F77",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "neopixel_off",
        "message0": "neopixel off",
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#148F77",
        "tooltip": "",
        "helpUrl": ""
      },
      //neopixel End ///////////////////////////////

    //Buzzer Start ///////////////////////////////
    {
        "type": "buzzer1",
        "message0": "buzzer frequency %1 beep %2 seconds",
        "args0": [
          {
            "type": "input_value",
            "name": "freq",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "time",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#D35400",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "buzzer2",
        "message0": "buzzer %1 frequency beep",
        "args0": [
          {
            "type": "input_value",
            "name": "freq",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#D35400",
        "tooltip": "",
        "helpUrl": ""
      },
      
      {
        "type": "buzzer3",
        "message0": "buzzer stop beep",
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#D35400",
        "tooltip": "",
        "helpUrl": ""
      },
        {
            "type": "buz_play_music",
                "message0": "play music🎵 : %1",
                "args0":[
                {
                  "type": "field_dropdown",
                  "name": "music",
                  "options": [
                    [Blockly.Msg.happy , "1"],
                    [Blockly.Msg.darth_vader , "2"],
                    [Blockly.Msg.jingle_bell , "3"],                
                    [Blockly.Msg.mary_little_lamb , "4"],
                    [Blockly.Msg.bitsy_spider , "5"]
                  ]
                    
                }
              ], 
              "inputsInline": true,
              "previousStatement": null,
              "nextStatement": null,
              "colour": "#D35400",
              "tooltip": "",
              "helpUrl": ""

        },
    //Buzzer End /////////////////////////////////



//IR_START ///////////////////////////////////////
{  
    "type": "ir_get_sig",
    "message0": "read IRsignal",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#b0120a",
    "tooltip": "",
    "helpUrl": ""
  },
 
  //IR_END ///////////////////////////////////////


 //Line Tracking Start ///////////////////////////
 {
  "type": "linetracking_threshold",
  "message0": "line tracking set value threshold: black  %1 white %2",
  "args0": [
    {
      "type": "field_number",
      "name": "black",
      "value": 0
    },
    {
      "type": "field_number",
      "name": "white",
      "value": 0
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "ad1457",
  "tooltip": "",
  "helpUrl": ""
},
  {
    "type": "linetracking_sensor",
    "message0": "read %1 %2 threshold",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "sensor",
        "options": [
          [
            "sensor1",
            "sensor1_value"
          ],
          [
            "sensor2",
            "sensor2_value"
          ],
          [
            "sensor3",
            "sensor3_value"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "operator",
        "options": [
          [
            "=",
            "=="
          ],
          [
            ">",
            ">"
          ],
          [
            "<",
            "<"
          ],
          [
            ">=",
            ">="
          ],
          [
            "<=",
            "<="
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "ad1457",
    "tooltip": "",
    "helpUrl": ""
  },

    { 
    "type": "ir_sig_new2",
    "message0": "IR signal",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "311b92",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type":"ir_comman_if",
    "message0": "IR signal = %1",
    "args0":[
      {
        "type" : "field_dropdown",
        "name" : "ir_but",
        "options" : [
          [
            Blockly.Msg.but1, "1"
          ],
          [
            Blockly.Msg.but2 , "2"
          ],
          [
            Blockly.Msg.but3 , "3"
          ],
          [
            Blockly.Msg.but4 , "4"
          ],
          [
            Blockly.Msg.but5 , "5"
          ],
          [
            Blockly.Msg.but6 , "6"
          ],
          [
            Blockly.Msg.but7 , "7"
          ],
          [
            Blockly.Msg.but8 , "8"
          ],
          [
            Blockly.Msg.but9 , "9"
          ],
          [
            Blockly.Msg.but0 , "0"
          ],
          [
            Blockly.Msg.buttag , "#"
          ],
          [
            Blockly.Msg.butstar , "*"
          ],
          [
            Blockly.Msg.butup , "Up"
          ],
          [
            Blockly.Msg.butdown , "Down"
          ],
          [
            Blockly.Msg.butleft , "Left"
          ],
          [
            Blockly.Msg.butright , "Right"
          ],
          [
            Blockly.Msg.butokay , "OK"
          ],
          
        ]
      }
    ],
  "output": ["Number", "Boolean"],
  "inputsInline": true,
  //"peviousStatement": null,
  //"nextStatement": null,
  "colour": "311b92",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type":"ir_read",
  "message0": "IR read",
  
  
"output": ["Number", "Boolean"],
"inputsInline": true,
//"peviousStatement": null,
//"nextStatement": null,
"colour": "311b92",
"tooltip": "",
"helpUrl": ""
},
  //Line Tracking END //////////////////////////////////////
  
  //LOOP GROUP Start /////////////////////////////////
  {
    "type": "controls_every",
    "message0": "every %1 ms",
    "args0": [{
      "type": "input_value",
      "name": "TIMES",
      "check": "Number"
    }],
    "message1": "%1",
    "args1": [{
      "type": "input_statement",
      "name": "DO"
    }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#D4AC0D",
    "tooltip": "",
    "helpUrl": ""
  },
  //LOOP GROUP END /////////////////////////////////

  //MATH GROUP Start ///////////////////////////////
  {
    "type": "abs_of",
    "message0": "absolute of %1",
    "args0": [
      {
        "type": "input_value",
        "name": "FROM",
        "check": "Number"
      },
      
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": "#34495E",
    "tooltip": "",
    "helpUrl": ""
  },
  //MATH GROUP End ///////////////////////////////
  //block_bool
  {
    "type": "bool_tf",
    "message0": "true",
    "output": "Boolean",
    "colour": "00A4A6",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "bool_false",
    "message0": "false",
    "output": "Boolean",
    "colour": "00A4A6",
    "tooltip": "",
    "helpUrl": ""
  },
  //block_break
  {
     
    "type": "break_code",
    "message0": "break",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "00A4A6",
    "tooltip": "",
    "helpUrl": ""
  },
  //block_linetracking
  {        
    "type": "line_sensor",
    "message0": "line tracking sensor %1",
    "args0":[
    {
      "type": "field_dropdown",
      "name": "pin_sen",
      "options": [
        ["left" , "35"],
        ["right" , "34"],
        
      ]
        
    }
  ], 
"output": null,
"colour": "ad1457",
"tooltip": "",
"helpUrl": "",
  
},

{        
"type": "line_sensor_if",
"message0": "line tracking %1 %2 %3",
"args0":[
{
"type": "field_dropdown",
"name": "pin_sen",
"options": [
  ["left" , "35"],
  ["right" , "34"],
  
]
  
},
{
"type": "field_dropdown",
"name": "math",
"options": [
  [">" , ">"],
  ["<" , "<"],
  
]

},
{
"type": "field_dropdown",
"name": "sensor_lr",
"options": [
  ["ssl" , "ssl"],
  ["ssr" , "ssr"],
  
]

},
], 
"output": null,
"colour": "ad1457",
"tooltip": "",
"helpUrl": "",

},

{
"type": "set_ssr_ssl",
"message0": "set %1 %2",
"args0": [
{
  "type": "field_dropdown",
  "name": "ssr_ssl",
  "options": [
    ["ssr" , "ssr"],
    ["ssl" , "ssl"],     
  ]
  
},
{
  "type": "field_number",
  "name": "pin",
  
}
],
"inputsInline": true,
"previousStatement": null,
"nextStatement": null,
"colour": "ad1457",
"tooltip": "",
"helpUrl": ""
},

{        
"type": "line_sensor_if3",
"message0": "line tracking %1 is %2",
"args0":[
{
  "type": "field_dropdown",
  "name": "pin_sen",
  "options": [
    [Blockly.Msg.left , "35"],
    [Blockly.Msg.right , "34"],
    
  ]
    
},
{
  "type": "field_dropdown",
  "name": "math",
  "options": [
    [Blockly.Msg.blacktext , "1"],
    [Blockly.Msg.whitetext , "2"],
    
  ]

},

], 
"output": null,
"colour": "ad1457",
"tooltip": "",
"helpUrl": "",

},

{
"type": "read_ssl_ssr",
"message0": "read %1",
"args0": [
{
  "type": "field_dropdown",
  "name": "ssr_ssl",
  "options": [
    ["ssr" , "ssr"],
    ["ssl" , "ssl"],     
  ]
  
},
],
"inputsInline": true,
"previousStatement": null,
"nextStatement": null,
"colour": "ad1457",
"tooltip": "",
"helpUrl": ""
},
//block_onstart
{
  "type": "on_start",
  "message0": "on start",
  "message1": "%1",
  "args1": [{
    "type": "input_statement",
    "name": "DO"
  }],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D4AC0D",
  "tooltip": "",
  "helpUrl": "",
},
//block_switch
{
  "type": "switch_is_press_beetle",
  "message0": "switch %1 is press ?",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "n",
      "options": [
        [
          "S1",
          "S1"
        ],
        [
          "S2",
          "S2"
        ]
      ]
    }
  ],
  "output": null,
  "colour": "#00695c",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "switch_is_release_beetle",
  "message0": "switch %1 is release ?",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "n",
      "options": [
        [
          "S1",
          "S1"
        ],
        [
          "S2",
          "S2"
        ]
      ]
    }
  ],
  "output": null,
  "colour": "#00695c",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "switch_get_value_beetle",
  "message0": "switch %1 get value",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "n",
      "options": [
        [
          "S1",
          "S1"
        ],
        [
          "S2",
          "S2"
        ]
      ]
    }
  ],
  "output": null,
  "colour": "#00695c",
  "tooltip": "",
  "helpUrl": ""
},
//------------------------------------------------------------------
{
  "type": "switch_on_press_beetle",
  "message0": "switch %1 on pressed %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [
          "sw_a",
          "1"
        ],
        [
          "sw_b",
          "2"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "callback"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#00695c",
  "tooltip": "",
  "helpUrl": ""
},
//------------------------------------------------------------------

{
  "type": "switch_on_release_beetle",
  "message0": "switch %1 on release %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [
          "S1",
          "S1"
        ],
        [
          "S2",
          "S2"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "callback"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#00695c",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "switch_on_pressed_beetle",
  "message0": "switch %1 on pressed %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [
          "sw_a",
          "1"
        ],
        [
          "sw_b",
          "2"
        ],
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "callback"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#00695c",
  "tooltip": "",
  "helpUrl": ""
},
 //LOOP GROUP
 {
  "type": "controls_every",
  "message0": "every %1 ms",
  "args0": [{
    "type": "input_value",
    "name": "TIMES",
    "check": "Number"
  }],
  "message1": "%1",
  "args1": [{
    "type": "input_statement",
    "name": "DO"
  }],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D4AC0D",
  "tooltip": "",
  "helpUrl": ""
},
//math_abs_of
{
  "type": "abs_of",
  "message0": "Absolute of %1",
  "args0": [
    {
      "type": "input_value",
      "name": "FROM",
      "check": "Number"
    },
    
  ],
  "inputsInline": true,
  "output": "Number",
  "style": "math_blocks",
  "tooltip": "",
  "helpUrl": ""
},

]);