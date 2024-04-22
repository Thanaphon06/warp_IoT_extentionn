Blockly.Msg.mt_sigh = ">";
Blockly.Msg.lt_sigh = "<";
Blockly.Msg.happy = "happy birthday";
Blockly.Msg.darth_vader = "darth vader theme";
Blockly.Msg.jingle_bell = "jingle bell";
Blockly.Msg.mary_little_lamb = "mary had a little lamb";
Blockly.Msg.bitsy_spider  = "bitsy spider ";

//03/05/2024
Blockly.Msg.badboy  = "badboy";
Blockly.Msg.old_macdonald  = "old macdonald";
Blockly.Msg.harry_potter  = "harry potter";
//03/05/2024
Blockly.defineBlocksWithJsonArray([
///button
    
    {
    
      "type":"switch_iot",
          "message0": "switch: %1 on pressed",
          "args0":[
            {
              "type": "field_number",
              "name": "pin",
              "check": "Number"
            }
          ],
        "output": ["Number", "Boolean"],
        "inputsInline": true,
        "colour": "00695c",
        "tooltip": "",
        "helpUrl": ""
        
        },
        //Switch Start ///////////////////////////////


    {
      "type":"switch_toggle_iot",
      "message0": "switch: %1 is on ",
      "args0":[
        {
          "type": "field_number",
          "name": "pin",
          "check": "Number"
        }
      ],
    "output": ["Number", "Boolean"],
    "inputsInline": true,
    "colour": "00695c",
    "tooltip": "",
    "helpUrl": ""
    },
    


//Switch End /////////////////////////////////
///button
///buzzer
    {
        "type": "tone1",
        "message0": "buzzer pin: %1 frequency: %2 beep: %3 seconds",
        "args0": [
          {
            "type": "input_value",
            "name": "pin",
            "check": "Number"
          },
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
        "colour": "#16A085",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "tone2",
        "message0": "buzzer pin: %1 frequency: %2 beep",
        "args0": [
          {
            "type": "input_value",
            "name": "pin",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "freq",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#16A085",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "no_tone",
        "message0": "buzzer pin: %1 stop beep",
        "args0": [
          {
            "type": "input_value",
            "name": "pin",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#16A085",
        "tooltip": "",
        "helpUrl": ""
      },
///buzzer
///delay
{
    "type": "delaysec",
    "message0": "wait: %1 seconds",
    "args0": [
      {
        "type": "input_value",
        "name": "time",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#F39C12",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "delaymilli",
    "message0": "wait: %1 milliseconds",
    "args0": [
      {
        "type": "input_value",
        "name": "timems",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#F39C12",
    "tooltip": "",
    "helpUrl": ""
  },
  
///delay
///dhtrun
{
    "type": "dhtrun",
    "message0": "dht22 pin: %1 read: %2",
    "args0": [
      
      {
        "type": "input_value",
        "name": "pin",
        "check": "Number"
      },
      {
        "type": "field_dropdown",
        "name": "valueIndex",
        "options": [
          [
            "temperature",
            "0"
          ],
          [
            "humidity",
            "1"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": "#990FFF",
    "tooltip": "",
    "helpUrl": ""
  },
///dhtrun
///lcd
{
    "type": "lcdsetting",
    "message0": "LCD Setup pin sck: %1 mosi: %2 dc: %3 cs: %4 rst: %5 rotatation: %6",
    "args0": [
      {
        "type": "input_value",
        "name": "pinsck",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "pinmosi",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "pindc",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "pincs",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "pinrst",
        "check": "Number"
      },
      {
      "type": "field_dropdown",
          "name": "rotation_index",
          "options":
          [
            [
              "0",
              "0"
            ],
            [
              "90",
              "90"
            ],
            [
              "180",
              "180"
            ],
            [
              "270",
              "270"
            ]
          ]
      }      
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#48C9B0",
    "tooltip": "",
    "helpUrl": ""
    },
    {
      "type": "lcdshow",
      "message0": "LCD horizontal: %1 vertical: %2 show: %3",
      "args0":
      [
        {
          "type": "input_value",
          "name": "xaxis"
        },
        {
          "type": "input_value",
          "name": "yaxis"
        },
        {
          "type": "input_value",
          "name": "showtext"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#48C9B0",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "lcdclear",
      "message0": "LCD Clear",
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#48C9B0",
      "tooltip": "",
      "helpUrl": ""
    },
///lcd
///ldrrun
{
    "type": "ldrrun",
    "message0": "ldr pin: %1",
    "args0":
    [      
      {
        "type": "input_value",
        "name": "pin",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": "#5DADE2",
    "tooltip": "",
    "helpUrl": ""
  },
///ldrrun
//led
{
    "type": "ledset",
    "message0": "LED pin: %1 mode: %2",
    "args0": [
      {
        "type": "input_value",
        "name": "ledpin",
        "check": "Number"
      },
      {
        "type": "field_dropdown",
        "name": "ledindex",
        "options": [
          [
            "On",
            "1"
          ],
          [
            "Off",
            "0"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#FF5252",
    "tooltip": "",
    "helpUrl": ""
  },
//led
//motordc
{
    "type": "motordcset",
    "message0": "motor DC pin + %1 pin - %2",
    "args0": [
      {
        "type": "input_value",
        "name": "motordcpluspin",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "motordcminuspin",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#7521FF",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "motordcrun",
    "message0": "motor DC Run pin + %1 pin - %2",
    "args0":
    [
      {
        "type": "field_dropdown",
        "name": "motordcplusindex",
        "options":
        [
          [
            "Low",
            "0"
          ],
          [
            "High",
            "1023"
          ]
        ]      
      },
      {
        "type": "field_dropdown",
        "name": "motordcminusindex",
        "options":
        [
          [
            "Low",
            "0"
          ],
          [
            "High",
            "1023"
          ]
        ]      
      },
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#7521FF",
    "tooltip": "",
    "helpUrl": ""
  },
//motordc
/*neopixel
{
    "type": "neopixel_setup",
    "message0": "neoPixel setup pin: %1 lenght: %2",
    "args0": [
      {
        "type": "input_value",
        "name": "pin",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "length",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#27AE60",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "neopixel_set_color1",
    "message0": "neoPixel number %1 set color %2",
    "args0": [
      {
        "type": "input_value",
        "name": "n",
        "check": "Number"
      },
      {
        "type": "field_colour",
        "name": "color",
        "colour": "#ff0000"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#27AE60",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "neopixel_set_color2",
    "message0": "neoPixel number %1 set color Red: %2 Green: %3 Blue: %4",
    "args0": [
      {
        "type": "input_value",
        "name": "n",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "red",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "green",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "blue",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#27AE60",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "neopixel_fill_color1",
    "message0": "neoPixel fill color %1",
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
    "colour": "#27AE60",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "neopixel_fill_color2",
    "message0": "neoPixel fill color Red: %1 Green: %2 Blue: %3",
    "args0": [
      {
        "type": "input_value",
        "name": "red",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "green",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "blue",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#27AE60",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "neopixel_show",
    "message0": "neoPixel show",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#27AE60",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "neopixel_clear",
    "message0": "neoPixel clear",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#27AE60",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "neopixel_rainbow",
    "message0": "neoPixel rainbow with wait %1 ms",
    "args0": [
      {
        "type": "input_value",
        "name": "wait",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#27AE60",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "neopixel_set_brightness",
    "message0": "neoPixel set brightness %1 %%",
    "args0": [
      {
        "type": "input_value",
        "name": "brightness",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#27AE60",
    "tooltip": "",
    "helpUrl": ""
  },
*/ //neopixel
//pmsetting

{
    "type": "pmsetting",
    "message0": "pm Sensor pin tx: %1 rx: %2",
    "args0":
    [
      {
        "type": "input_value",
        "name": "pintx",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "pinrx",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#8E44AD",
    "tooltip": "",
    "helpUrl": ""
    },
    {
      "type": "pmgetting",
      "message0": "pm Sensor get value",    
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#8E44AD",
      "tooltip": "",
      "helpUrl": ""
    },
    {
    "type": "pmrunning",
    "message0": "pm Sensor read: %1",
    "args0":
    [
      {
        "type": "field_dropdown",
        "name": "pm_index",
        "options":
        [
          [
            "PM1",
            "pm1"
          ],
          [
            "PM2.5",
            "pm2_5"
          ],
          [
            "PM10",
            "pm10"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "output": [
      "Boolean",
      "Number"
    ],
    "colour": "#8E44AD",
    "tooltip": "",
    "helpUrl": ""
    },
//pmsetting
//proximityrun
{
    "type": "proximityrun",
    "message0": "proximity pin: %1",
    "args0":
    [      
      {
        "type": "input_value",
        "name": "pin",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": "#EC7063",
    "tooltip": "",
    "helpUrl": ""
  },
//proximityrun
//relayset
{
    "type": "relayset",
    "message0": "relay pin: %1 mode: %2",
    "args0": [
      {
        "type": "input_value",
        "name": "relaypin",
        "check": "Number"
      },
      {
        "type": "field_dropdown",
        "name": "relayindex",
        "options": [
          [
            "High",
            "1"
          ],
          [
            "Low",
            "0"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#F5B041",
    "tooltip": "",
    "helpUrl": ""
  },
//relayset
//rfidset
{
    "type": "rfidset",
    "message0": "RFID pinscl: %1 pinsda: %2",
    "args0":
    [
      {
        "type": "input_value",
        "name": "pinscl",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "pinsda",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#76448A",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "rfidget",
    "message0": "RFID get value",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#76448A",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "rfidrun",
    "message0": "RFID value",
    "inputsInline": true,
    "output": [
      "Boolean",
      "Number"
    ],
    "colour": "#76448A",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "rfidreset",
    "message0": "RFID reset value",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#76448A",
    "tooltip": "",
    "helpUrl": ""
  },
//rfidset
//rotaryset
{
    "type": "rotaryset",
    "message0": "rotary Encoder pin clk: %1 dt: %2",
    "args0": [
      {
        "type": "input_value",
        "name": "pinclk",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "pindt",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#F39C12",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "rotaryget",
    "message0": "rotary Encoder get value",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#F39C12",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "rotaryrun",
    "message0": "rotary Encoder Value",
    "inputsInline": true,
    "output": [
      "Boolean",
      "Number"
    ],
    "colour": "#F39C12",
    "tooltip": "",
    "helpUrl": ""
  },
//rotaryset
//servoeasy
{
    "type": "servoeasy",
    "message0": "servo pin: %1 set angle: %2 °",
    "args0": [
      {
        "type": "input_value",
        "name": "pin",
        "check": "Number"
      },
      {
          "type": "field_dropdown",
          "name": "servoindex",
          "options":
          [
            [
              "0",
              "0"
            ],
            [
              "30",
              "30"
            ],
            [
              "60",
              "60"
            ],
            [
              "90",
              "90"
            ],
            [
              "120",
              "120"
            ],
            [
              "150",
              "150"
            ],
            [
              "180",
              "180"
            ]
          ]      
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#2ECC71",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "servohard",
    "message0": "servo pin: %1 set angle: %2 °",
    "args0": [
      {
        "type": "input_value",
        "name": "pin",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "angle",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#2ECC71",
    "tooltip": "",
    "helpUrl": ""
  },
  //servoeasy
  //stepsetting
  {
    "type": "stepsetting",
    "message0": "stepper motor pin dir: %1 step: %2",
    "args0": [
      {
        "type": "input_value",
        "name": "pindir",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "pinstep",
        "check": "Number"
      }         
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#CD6155",
    "tooltip": "",
    "helpUrl": ""
    },
    {
      "type": "stepdrive",
      "message0": "stepper motor drive direction: %1 step: %2 delay: %3 acceleration: %4",
      "args0":
      [
        {
          "type": "field_dropdown",
            "name": "step_index",
            "options":
            [
              [
                "right",
                "1"
              ],
              [
                "left",
                "0"
              ]
            ]
        },
        {
          "type": "input_value",
          "name": "step",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "delay",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "accel",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#CD6155",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "stepstop",
      "message0": "stop stepper motor",
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#CD6155",
      "tooltip": "",
      "helpUrl": ""
    },
  //stepsetting
  //thingsboard_setting

  {
    "type": "thingsboard_setting",
    "message0": "thingsboard Auth Token: %1",
    "args0": [
      {
        "type": "input_value",
        "name": "token",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#8bc34a",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "thingsboard_connect",
    "message0": "thingsboard Connect",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#8bc34a",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "thingsboard_sender",
    "message0": "send widget %1 value %2 to thingsboard",
    "args0": [
      {
        "type": "input_value",
        "name": "widget"
      },
      {
        "type": "input_value",
        "name": "value"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#8bc34a",
    "tooltip": "",
    "helpUrl": ""
  },
  //thingsboard_setting
  //wifi_setting
  {
    "type": "wifi_setting",
    "message0": "WiFi Setting SSID: %1 Password: %2",
    "args0": [
      {
        "type": "input_value",
        "name": "ssid",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "pass",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#61c1ff",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "wifi_waiting",
    "message0": "WiFi wait connected",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#61c1ff",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "wifi_connect",
    "message0": "WiFi is connected",
    "inputsInline": true,
    "output": [
      "Boolean",
      "Number"
    ],
    "colour": "#61c1ff",
    "tooltip": "",
    "helpUrl": ""
  },
  //wifi_setting
  //read poten
  {
    "type": "read_poten",
    "message0": "read potentio meter pin %1",
    "args0": [
      {
        "type": "input_value",
        "name": "pin",
        "check": [
          "Boolean",
          "Number",
          
        ]
      }
    ],
    "output": "Number",
    "inputsInline": true,
    "colour": "311b92",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "poten_ifelse",
    "message0": "potentio pin: %1 %2 %3",
    "args0": [
      {
        "type": "input_value",
        "name": "pin",
        "check": "Number"
      },
      {
        "type": "field_dropdown",
        "name": "same",
        "options": [
          [Blockly.Msg.mt_sigh , ">"],
          [Blockly.Msg.lt_sigh , "<"],
          
        ]
      },
      {
        "type": "input_value",
        "name": "value",
        "check": "Number"
      }],
    "message1": "%1",
    "args1": [{
      "type": "input_statement",
      "name": "DO"
    }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "311b92",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "if_poten",
    "message0": "potentio pin: %1 %2 %3",
    "args0": [
      {
        "type": "input_value",
        "name": "pin",
        "check": "Number"
      },
      {
        "type": "field_dropdown",
        "name": "same",
        "options": [
          [Blockly.Msg.mt_sigh , ">"],
          [Blockly.Msg.lt_sigh , "<"],
          
        ]
      },
      {
        "type": "input_value",
        "name": "value",
        "check": "Number"
      },
    ],
    "output": ["Number", "Boolean"],
    "inputsInline": true,
    "colour": "311b92",
    "tooltip": "",
    "helpUrl": ""
  },
  
  //------------------------------------------------------------------
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
  
      //neopixel Start /////////////////////////////
      {
        "type": "neopixel_fill_color1_neo",
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
        "type": "neopixel_toggle_iot",
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
        "type": "rainbow_neo_iot",
        "message0": "neopixel rainbow",
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#148F77",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "neopixel_off_iot",
        "message0": "neopixel off",
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#148F77",
        "tooltip": "",
        "helpUrl": ""
      },
     {
        "type": "set_neopi",
        "message0": "set neopixel pin:%1 lenght:%2",
        "args0": [
          {
            "type": "input_value",
            "name": "pin",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "lenght",
            "check": "Number"
          },
          
        ],
       

        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#148F77",
        "tooltip": "",
        "helpUrl": ""
      },
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
                  [Blockly.Msg.jingle_bell , "3"],                
                  [Blockly.Msg.mary_little_lamb , "4"],
                  [Blockly.Msg.badboy , "5"],
                  [Blockly.Msg.harry_potter , "7"],
                  
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
      {
        "type": "buzzer_set_pin",
        "message0": "set buzzer pin:%1",
        "args0": [
          {
            "type": "input_value",
            "name": "pin",
            "check": "Number"
          },
        
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#D35400",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "oled_init_iot",
        "message0": "OLED initial with size %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "size",
            "options": [
              [
                "128x64",
                "0"
              ],
              [
                "128x32",
                "1"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#2980B9",
        "tooltip": "Setup OLED for ready use",
        "helpUrl": ""
      },
      {
        "type": "oled_draw_text_iot",
        "message0": "OLED draw text %1 at (x: %2 , y: %3 )",
        "args0": [
          {
            "type": "input_value",
            "name": "text"
          },
          {
            "type": "input_value",
            "name": "x",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "y",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#2980B9",
        "tooltip": "Draw text on OLED",
        "helpUrl": ""
      },
      {
        "type": "oled_draw_line",
        "message0": "OLED draw line start at (x: %1 , y: %2 ) end at (x: %3 , y: %4 )",
        "args0": [
          {
            "type": "input_value",
            "name": "x1",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "y1",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "x2",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "y2",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#2980B9",
        "tooltip": "Draw line on OLED",
        "helpUrl": ""
      },
      {
        "type": "oled_draw_rect",
        "message0": "OLED draw rectangle start at (x: %1 , y: %2 ) width: %3 height: %4 fill: %5",
        "args0": [
          {
            "type": "input_value",
            "name": "x",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "y",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "width",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "height",
            "check": "Number"
          },
          {
            "type": "field_dropdown",
            "name": "fill",
            "options": [
              [
                "No",
                "0"
              ],
              [
                "Yes",
                "1"
              ]
            ]
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#2980B9",
        "tooltip": "Draw rectangle on OLED",
        "helpUrl": ""
      },
      {
        "type": "oled_fill",
        "message0": "OLED fill",
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#2980B9",
        "tooltip": "Fill color",
        "helpUrl": ""
      },
      {
        "type": "oled_clear",
        "message0": "OLED clear",
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#2980B9",
        "tooltip": "clear screen",
        "helpUrl": ""
      },
      {
        "type": "tone1",
        "message0": "Buzzer pin %1 frequency %2 beep %3 seconds",
        "args0": [
          {
            "type": "input_value",
            "name": "pin",
            "check": "Number"
          },
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
        "colour": "#F39C12",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "tone2",
        "message0": "Buzzer pin %1 frequency %2 beep",
        "args0": [
          {
            "type": "input_value",
            "name": "pin",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "freq",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#F39C12",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "no_tone",
        "message0": "Buzzer pin %1 stop beep",
        "args0": [
          {
            "type": "input_value",
            "name": "pin",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#F39C12",
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
  
  //MATH GROUP
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
      
      //neopixel End ///////////////////////////////

    //03/05/2024
   
])
