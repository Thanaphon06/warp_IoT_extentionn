  //buttonset
  Blockly.Python['buttonset'] = function(block)
  {
    Blockly.Python.definitions_['import_machine'] = 'import machine';
    var functionName = Blockly.Python.provideFunction_(
    'buttonset',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(pin):',
    '\tbutton_pin = machine.Pin(pin, machine.Pin.IN, machine.Pin.PULL_UP)',
    '\tbutton_state = button_pin.value()',
    '\treturn button_state',]);
  
    var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var code = `${functionName}(${value_pin})`;
    return [code, Blockly.Python.ORDER_NONE];
  };
  function buzzerWriteFunction() {
      let board = boards.find(board => board.id === boardId);
    
      const _duty = board?.chip === "RP2" ? "duty_u16" : "duty";
      const _max_duty = board?.chip === "RP2" ? "65535" : "1023";
    
      return Blockly.Python.provideFunction_(
        'buzzerWrite',
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(pin, freq=1000, duty=50, stop=0):',
        '  pwm = machine.PWM(machine.Pin(pin))',
        '  pwm.freq(freq)',
        '  pwm.' + _duty + '(int(duty / 100 * ' + _max_duty + '))',
        '  if stop > 0:',
        '    time.sleep(stop)',
        '    pwm.' + _duty + '(0)'
      ]);
    }
            // button Start /////////////////////////////////
            Blockly.Python['switch_iot'] = function(block) {
              Blockly.Python.definitions_['import_machine'] = 'import machine';
              var number_button = block.getFieldValue('pin');
  
              var functionName = Blockly.Python.provideFunction_(
              'buttonset',
              ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(pin):',
              '\tbutton_pin = machine.Pin(pin, machine.Pin.IN, machine.Pin.PULL_UP)',
              '\tbutton_state = button_pin.value()',
              '\treturn button_state',]);
            
              
              var code = `${functionName}(${number_button}) == 0`;
              return [code, Blockly.Python.ORDER_NONE];
              };
              Blockly.Python['switch_toggle_iot'] = function(block) {
                Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
                
               var dropdown_button = block.getFieldValue('pin');
            
               code = '';;
               if(dropdown_button == 18){
                 code = `beetlecar.toggle_state_a`;
               }else if(dropdown_button == 5){
                 code = `beetlecar.toggle_state_b`;
               }
                return [code, Blockly.Python.ORDER_NONE];
              };
    //buttonset
    //buzzer
  
    Blockly.Python['tone1'] = function(block) {
      Blockly.Python.definitions_['import_time'] = 'import time';
      Blockly.Python.definitions_['import_machine'] = 'import machine';
    
      var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
      var value_freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);
      var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
      var code = `${buzzerWriteFunction()}(${value_pin}, freq=${value_freq}, stop=${value_time})\n`;
      return code;
    };
    
    Blockly.Python['tone2'] = function(block) {
      Blockly.Python.definitions_['import_time'] = 'import time';
      Blockly.Python.definitions_['import_machine'] = 'import machine';
    
      var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
      var value_freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);
      var code = `${buzzerWriteFunction()}(${value_pin}, freq=${value_freq})\n`;
      return code;
    };
    
    Blockly.Python['no_tone'] = function(block) {
      Blockly.Python.definitions_['import_time'] = 'import time';
      Blockly.Python.definitions_['import_machine'] = 'import machine';
    
      var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
      var code = `${buzzerWriteFunction()}(${value_pin}, duty=0)\n`;
      return code;
    };
    //buzzer
    //delaysec
    Blockly.Python['delaysec'] = function(block) {
      Blockly.Python.definitions_['import_time'] = 'import time';
      var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
      var code = `time.sleep(${value_time})\n`
      return code;
    };
    Blockly.Python['delaymilli'] = function(block) {
      Blockly.Python.definitions_['import_time'] = 'import time';
      var value_timems = Blockly.Python.valueToCode(block, 'timems', Blockly.Python.ORDER_ATOMIC);
      var code = `time.sleep_ms(${value_timems})\n`
      return code;
    };
    //delaysec
    //dhtrun
  
    Blockly.Python['dhtrun'] = function(block)
  {
    Blockly.Python.definitions_['import_machine'] = 'import machine';
    Blockly.Python.definitions_['import_dht'] = 'import dht';
    var functionName = Blockly.Python.provideFunction_(
    'dhtrun',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(pin):',
    '\tdht_sensor = dht.DHT22(machine.Pin(pin))',
    '\tdht_sensor.measure()',
    '\treturn [ dht_sensor.temperature(), dht_sensor.humidity() ]',]);
  
    var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var dropdown_valueindex = block.getFieldValue('valueIndex');
    var code = `${functionName}(${value_pin})[${dropdown_valueindex}]`;
    return [code, Blockly.Python.ORDER_NONE];
  };
    //dhtrun
  //lcdsetting
    Blockly.Python['lcdsetting'] = function(block) {
      Blockly.Python.definitions_['import_time'] = 'import time';
      Blockly.Python.definitions_['import_ili9341'] = 'import ili9341';
      Blockly.Python.definitions_['import_machine'] = 'import machine';
      Blockly.Python.definitions_['import_freesan'] = 'import freesan';
      var value_sck = Blockly.Python.valueToCode(block, 'pinsck', Blockly.Python.ORDER_ATOMIC);
      var value_mosi = Blockly.Python.valueToCode(block, 'pinmosi', Blockly.Python.ORDER_ATOMIC);
      var value_dc = Blockly.Python.valueToCode(block, 'pindc', Blockly.Python.ORDER_ATOMIC);
      var value_cs = Blockly.Python.valueToCode(block, 'pincs', Blockly.Python.ORDER_ATOMIC);
      var value_rst = Blockly.Python.valueToCode(block, 'pinrst', Blockly.Python.ORDER_ATOMIC);
      var value_rotation = block.getFieldValue('rotation_index');
      var code = `spi = machine.SPI(1, baudrate=10000000, sck=machine.Pin(${value_sck}), mosi=machine.Pin(${value_mosi}))\n`;
      code += `display = ili9341.ILI9341(spi, dc=machine.Pin(${value_dc}), cs=machine.Pin(${value_cs}), rst=machine.Pin(${value_rst}),width=320, height=240, rotation=${value_rotation})\n`;
      code += `display.set_font(freesan)\n`;
      return code;
    };
    Blockly.Python['lcdshow'] = function(block)
    {
      var value_xaxis = Blockly.Python.valueToCode(block, 'xaxis', Blockly.Python.ORDER_ATOMIC);
      var value_yaxis = Blockly.Python.valueToCode(block, 'yaxis', Blockly.Python.ORDER_ATOMIC);
      var value_showtext = Blockly.Python.valueToCode(block, 'showtext', Blockly.Python.ORDER_ATOMIC);
      var code = `display.set_pos(${value_xaxis},${value_yaxis})\n`;
      code += `display.print(str(${value_showtext}))\n`;
      return code;
    };
    Blockly.Python['lcdclear'] = function(block)
    {
      var code = `display.erase()\n`;
      return code;
    };
  //lcdsetting
  //ldrrun
  Blockly.Python['ldrrun'] = function(block)
  {
    Blockly.Python.definitions_['import_machine'] = 'import machine';
    var functionName = Blockly.Python.provideFunction_(
    'ldr',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(pin):',
    '\tldr_adc = machine.ADC(machine.Pin(pin))',
    '\tldr_value = ldr_adc.read()',
    '\treturn ldr_value',]);
  
    var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var code = `${functionName}(${value_pin})`;
    return [code, Blockly.Python.ORDER_NONE];
  };
  //ldrrun
  //ledset
  Blockly.Python['ledset'] = function(block) {
      Blockly.Python.definitions_['import_machine'] = 'import machine';
      var value_pinled = Blockly.Python.valueToCode(block, 'ledpin', Blockly.Python.ORDER_ATOMIC);
      var dropdown_led = block.getFieldValue('ledindex');
      var code = `machine.Pin(${value_pinled}, machine.Pin.OUT).value(${dropdown_led})\n`
      return code;
    };
  //ledset
  //motordcset
  Blockly.Python['motordcset'] = function(block) {
      Blockly.Python.definitions_['import_machine'] = 'import machine';
      var value_pinmotordcplus = Blockly.Python.valueToCode(block, 'motordcpluspin', Blockly.Python.ORDER_ATOMIC);
      var value_pinmotordcminus = Blockly.Python.valueToCode(block, 'motordcminuspin', Blockly.Python.ORDER_ATOMIC);
      var code = `motordcplus = machine.PWM(machine.Pin(${value_pinmotordcplus}))\n`
      code += `motordcminus = machine.PWM(machine.Pin(${value_pinmotordcminus}))\n`
      return code;
    };
    Blockly.Python['motordcrun'] = function(block) {
      var dropdown_motordcplus = block.getFieldValue('motordcplusindex');
      var dropdown_motordcminus = block.getFieldValue('motordcminusindex');
      var code = `motordcplus.duty(${dropdown_motordcplus})\n`
      code += `motordcminus.duty(${dropdown_motordcminus})\n`
      return code;
    };
  //motordcset
  /*/neopixel
  Blockly.Python['neopixel_setup'] = function(block) {
      var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
      var value_length = Blockly.Python.valueToCode(block, 'length', Blockly.Python.ORDER_ATOMIC) || '0';
      
      Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
      Blockly.Python.definitions_['from_neopixel_import_neopixel'] = 'from neopixel import NeoPixel';
    
      var code = `np = NeoPixel(Pin(${value_pin}, Pin.OUT), ${value_length}); np.bright = 50\n`;
      return code;
    };
    
    Blockly.Python['neopixel_set_color1'] = function(block) {
      var value_n = Blockly.Python.valueToCode(block, 'n', Blockly.Python.ORDER_ATOMIC);
      var colour_color = block.getFieldValue('color');
    
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colour_color);
      var red = parseInt(result[1], 16);
      var green = parseInt(result[2], 16);
      var blue = parseInt(result[3], 16);
    
      var code = `np[${value_n}] = (int(${red} * np.bright / 100), int(${green} * np.bright / 100), int(${blue} * np.bright / 100))\n`;
      return code;
    };
    
    Blockly.Python['neopixel_set_color2'] = function(block) {
      var value_n = Blockly.Python.valueToCode(block, 'n', Blockly.Python.ORDER_ATOMIC);
      var value_red = Blockly.Python.valueToCode(block, 'red', Blockly.Python.ORDER_ATOMIC);
      var value_green = Blockly.Python.valueToCode(block, 'green', Blockly.Python.ORDER_ATOMIC);
      var value_blue = Blockly.Python.valueToCode(block, 'blue', Blockly.Python.ORDER_ATOMIC);
    
      var code = `np[${value_n}] = (int(${value_red} * np.bright / 100), int(${value_green} * np.bright / 100), int(${value_blue} * np.bright / 100))\n`;
      return code;
    };
    
    Blockly.Python['neopixel_fill_color1'] = function(block) {
      var colour_color = block.getFieldValue('color');
    
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colour_color);
      var red = parseInt(result[1], 16);
      var green = parseInt(result[2], 16);
      var blue = parseInt(result[3], 16);
    
      var code = `for i in range(np.n): np[i] = (int(${red} * np.bright / 100), int(${green} * np.bright / 100), int(${blue} * np.bright / 100))\n`;
      return code;
    };
    
    Blockly.Python['neopixel_fill_color2'] = function(block) {
      var value_red = Blockly.Python.valueToCode(block, 'red', Blockly.Python.ORDER_ATOMIC);
      var value_green = Blockly.Python.valueToCode(block, 'green', Blockly.Python.ORDER_ATOMIC);
      var value_blue = Blockly.Python.valueToCode(block, 'blue', Blockly.Python.ORDER_ATOMIC);
    
      var code = `for i in range(np.n): np[i] = (int(${value_red} * np.bright / 100), int(${value_green} * np.bright / 100), int(${value_blue} * np.bright / 100))\n`;
      return code;
    };
    
    Blockly.Python['neopixel_show'] = function(block) {
      var code = 'np.write()\n';
      return code;
    };
    
    Blockly.Python['neopixel_clear'] = function(block) {
      var code = 'for i in range(np.n): np[i] = (0, 0, 0)\n';
      return code;
    };
    
    Blockly.Python['neopixel_rainbow'] = function(block) {
      var value_wait = Blockly.Python.valueToCode(block, 'wait', Blockly.Python.ORDER_ATOMIC) || '30';
    
      Blockly.Python.definitions_['from_time_import_sleep_ms'] = 'from time import sleep_ms';
    
      var functionName = Blockly.Python.provideFunction_(
        'neopixelRainbow',
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(np, wait):',
        '  for j in range(256):',
        '    for i in range(np.n):',
        '      WheelPos = (i * 1 + j) & 255',
        '      if WheelPos < 85:',
        '        np[i] = (int((WheelPos * 3) * np.bright / 100), int((255 - WheelPos * 3) * np.bright / 100), 0)',
        '      elif WheelPos < 170:',
        '        WheelPos -= 85',
        '        np[i] = (int((255 - WheelPos * 3) * np.bright / 100), 0, int((WheelPos * 3) * np.bright / 100))',
        '      else:',
        '        WheelPos -= 170',
        '        np[i] = (0, int((WheelPos * 3) * np.bright / 100), int((255 - WheelPos * 3) * np.bright / 100))',
        '    np.write()',
        '    sleep_ms(wait)']);
    
      var code = `${functionName}(np, ${value_wait})\n`;
      return code;
    };
    
    Blockly.Python['neopixel_set_brightness'] = function(block) {
      var value_brightness = Blockly.Python.valueToCode(block, 'brightness', Blockly.Python.ORDER_ATOMIC);
      var code = `np.bright = ${value_brightness}\n`;
      return code;
    };
  *///neopixel
  //pmsetting
  Blockly.Python['pmsetting'] = function(block)
  {
    Blockly.Python.definitions_['import_machine'] = 'import machine';
    var value_tx = Blockly.Python.valueToCode(block, 'pintx', Blockly.Python.ORDER_ATOMIC);
    var value_rx = Blockly.Python.valueToCode(block, 'pinrx', Blockly.Python.ORDER_ATOMIC);
    var code = `uart = machine.UART(1, baudrate=9600,tx=${value_tx},rx=${value_rx})\n`;
    code += `def pms7003(uart):\n`;
    code += `\twhile True:\n`;
    code += `\t\tif uart.any() >= 32:\n`;
    code += `\t\t\tdata = uart.read(32)\n`;
    code += `\t\t\tif data[0] == 0x42 and data[1] == 0x4D:\n`;
    code += `\t\t\t\tpm1 = (data[4] << 8) | data[5]\n`;
    code += `\t\t\t\tpm2_5 = (data[6] << 8) | data[7]\n`;
    code += `\t\t\t\tpm10 = (data[8] << 8) | data[9]\n`;
    code += `\t\t\treturn pm1, pm2_5, pm10\n`;  
    return code;
  };
  Blockly.Python['pmgetting'] = function(block)
  {
    var code = `pm1, pm2_5, pm10 = pms7003(uart)\n`;
    return code;
  };
  Blockly.Python['pmrunning'] = function(block)
  {
    var value_pm = block.getFieldValue('pm_index');
    var code = `${value_pm}`;
    return [code, Blockly.Python.ORDER_NONE];
  };
  //pmsetting
  //proximityrun
  Blockly.Python['proximityrun'] = function(block)
  {
    Blockly.Python.definitions_['import_machine'] = 'import machine';
    var functionName = Blockly.Python.provideFunction_(
    'proximityrun',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(pin):',
    '\tproximity_sensor = machine.Pin(pin,machine.Pin.IN)',
    '\tproximity_value = proximity_sensor.value()',
    '\treturn proximity_value',]);
  
    var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var code = `${functionName}(${value_pin})`;
    return [code, Blockly.Python.ORDER_NONE];
  };
  //proximityrun
  //relayset
  Blockly.Python['relayset'] = function(block) {
      Blockly.Python.definitions_['import_machine'] = 'import machine';
      var value_pinrelay = Blockly.Python.valueToCode(block, 'relaypin', Blockly.Python.ORDER_ATOMIC);
      var dropdown_relay = block.getFieldValue('relayindex');
      var code = `machine.Pin(${value_pinrelay}, machine.Pin.OUT).value(${dropdown_relay})\n`
      return code;
    };
  //relayset
  //rfidset
  Blockly.Python['rfidset'] = function(block)
  {
    Blockly.Python.definitions_['from_rfid_import_mfrc522'] = 'from rfid import mfrc522';
    var value_pinscl = Blockly.Python.valueToCode(block, 'pinscl', Blockly.Python.ORDER_ATOMIC);
    var value_pinsda = Blockly.Python.valueToCode(block, 'pinsda', Blockly.Python.ORDER_ATOMIC);
    var code = `rc522 = mfrc522(${value_pinscl},${value_pinsda},0x28)\n`
    code += `rc522.PCD_Init()\n`
    code += `data = 0\n`
    return code
  };
  Blockly.Python['rfidget'] = function(block)
  {
    var code = `if rc522.PICC_IsNewCardPresent():\n`
    code += `\tif rc522.PICC_ReadCardSerial() == True:\n`
    code += `\t\tfor i in rc522.uid.uidByte[0 : rc522.uid.size]:\n`,
    code += `\t\t\tdata = data + i\n`
    return code
  };
  Blockly.Python['rfidrun'] = function(block)
  {
    var code = `data`
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['rfidreset'] = function(block)
  {
    var code = `data = 0\n`
    return code
  };
  //rfidset
  //rotaryset
  Blockly.Python['rotaryset'] = function(block) {
      Blockly.Python.definitions_['import_rotary'] = 'import rotary';
      Blockly.Python.definitions_['import_machine'] = 'import machine';
      var value_clk = Blockly.Python.valueToCode(block, 'pinclk', Blockly.Python.ORDER_ATOMIC);
      var value_dt = Blockly.Python.valueToCode(block, 'pindt', Blockly.Python.ORDER_ATOMIC);
      var code = `rotary = rotary.RotaryIRQ(pin_num_clk=${value_clk},pin_num_dt=${value_dt},min_val=0,max_val=5,reverse=True,range_mode=rotary.RotaryIRQ.RANGE_WRAP)\n`
      return code;
    };
    Blockly.Python['rotaryget'] = function(block) {
      var code = `rotary_value = rotary.value()\n`
      return code;
    };
    Blockly.Python['rotaryrun'] = function(block) {
      var code = `rotary_value`;
      return [code, Blockly.Python.ORDER_NONE];
    };
  //rotaryset
  //servoeasy
  Blockly.Python['servoeasy'] = function(block) {
      Blockly.Python.definitions_['import_machine'] = 'import machine';
      var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
      var dropdown_servo = block.getFieldValue('servoindex');
      var code = `machine.PWM(machine.Pin(${value_pin}), freq=50).duty(int(25.57 + (((${dropdown_servo}) / 180.0) * 102.3)))\n`;
      
      return code;
    };
    Blockly.Python['servohard'] = function(block) {
      Blockly.Python.definitions_['import_machine'] = 'import machine';
      var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
      var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
      var code = `machine.PWM(machine.Pin(${value_pin}), freq=50).duty(int(25.57 + (((${value_angle}) / 180.0) * 102.3)))\n`;
      return code;
    };
  //servoeasy
  //stepsetting
  Blockly.Python['stepsetting'] = function(block) {
      Blockly.Python.definitions_['import_time'] = 'import time';
      Blockly.Python.definitions_['import_machine'] = 'import machine';
      var value_dir = Blockly.Python.valueToCode(block, 'pindir', Blockly.Python.ORDER_ATOMIC);
      var value_step = Blockly.Python.valueToCode(block, 'pinstep', Blockly.Python.ORDER_ATOMIC);
      var code = `dir_pin = machine.Pin(${value_dir},machine.Pin.OUT)\n`;
      code += `step_pin = machine.Pin(${value_step},machine.Pin.OUT)\n`;
      code += `def move_stepper(direct,steps, delay, accel):\n`;
      code += `\tdir_pin.value(direct)\n`;
      code += `\tsteps = abs(steps)\n`;
      code += `\tfor i in range(steps):\n`;
      code += `\t\tstep_pin.value(1)\n`;
      code += `\t\ttime.sleep_us(delay)\n`;
      code += `\t\tstep_pin.value(0)\n`;
      code += `\t\ttime.sleep_us(delay)\n`;
      code += `def stop_stepper():\n`;
      code += `\tstep_pin.value(0)\n`;
      return code;
    };
    Blockly.Python['stepdrive'] = function(block)
    {
      var value_dirindex = block.getFieldValue('step_index');
      var value_stepnum = Blockly.Python.valueToCode(block, 'step', Blockly.Python.ORDER_ATOMIC);
      var value_delay = Blockly.Python.valueToCode(block, 'delay', Blockly.Python.ORDER_ATOMIC);
      var value_accel = Blockly.Python.valueToCode(block, 'accel', Blockly.Python.ORDER_ATOMIC);
      var code = `move_stepper(${value_dirindex},${value_stepnum},${value_delay},${value_accel})\n`;
      return code;
    };
    Blockly.Python['stepstop'] = function(block)
    {
      var code = `stop_stepper()\n`;
      return code;
    };
  //stepsetting
  //thingsboard_setting
  Blockly.Python['thingsboard_setting'] = function(block) {
      var value_token = Blockly.Python.valueToCode(block, 'token', Blockly.Python.ORDER_ATOMIC);
      Blockly.Python.definitions_['import_thingsboard'] = 'import thingsboard';
      var code = `client = thingsboard.TBDeviceMqttClient('iot1.wsa.cloud', access_token=${value_token})\n`;
      return code;
    };
  Blockly.Python['thingsboard_connect'] = function(block) {
    var code = `client.connect()\n`;
    return code;
  };
  Blockly.Python['thingsboard_sender'] = function(block) {
    var value_widget = Blockly.Python.valueToCode(block, 'widget', Blockly.Python.ORDER_ATOMIC);
    var value_sender = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var code = `sendvalue = {${value_widget}:${value_sender}}\n`;
    code += `client.publish_data("v1/devices/me/telemetry",sendvalue)\n`;
    return code;
  };
  //thingsboard_setting
  //wifi_setting
  Blockly.Python['wifi_setting'] = function(block) {
      var value_ssid = Blockly.Python.valueToCode(block, 'ssid', Blockly.Python.ORDER_ATOMIC);
      var value_pass = Blockly.Python.valueToCode(block, 'pass', Blockly.Python.ORDER_ATOMIC) || 'None';
      Blockly.Python.definitions_['import_network'] = 'import network';
      var code = `wlan = network.WLAN(network.STA_IF); wlan.active(True); wlan.connect(${value_ssid}, ${value_pass})\n`;
      return code;
    };
    Blockly.Python['wifi_waiting'] = function(block) {
      var code = `while not wlan.isconnected() : pass\n`;
      return code;
    };
    Blockly.Python['wifi_connect'] = function(block) {
      var code = 'wlan.isconnected()';
      return [code, Blockly.Python.ORDER_NONE];
    };
    //wifi_setting
    //read poten
    
  Blockly.Python['read_poten'] = function (block) {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['from_machine_import_adc'] = 'from machine import ADC';
  
    var function_adcRead = Blockly.Python.provideFunction_(
        'adcRead',
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(analog_pin):',
        '  adc = ADC(Pin(analog_pin))',
        '  adc.atten(ADC.ATTN_11DB)',
        '  adc.width(ADC.WIDTH_12BIT)',
        '  return adc.read()']);
  
    var dropdown_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  
    var code = `${function_adcRead}(${dropdown_pin})`;
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['poten_ifelse'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['from_machine_import_adc'] = 'from machine import ADC';
  
    
  
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block) || Blockly.Python.PASS;
    var loopVar = Blockly.Python.variableDB_.getDistinctName(
        'count', Blockly.VARIABLE_CATEGORY_NAME);
  
    var value_number = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var math_choice = block.getFieldValue('same');
    
  
    var code = `if adcRead(34) ${math_choice} ${value_number}:\n`;
        code += `${branch}`
    return code;
  };
  Blockly.Python['if_poten'] = function (block) {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['from_machine_import_adc'] = 'from machine import ADC';
  
    var function_adcRead = Blockly.Python.provideFunction_(
        'adcRead',
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(analog_pin):',
        '  adc = ADC(Pin(analog_pin))',
        '  adc.atten(ADC.ATTN_11DB)',
        '  adc.width(ADC.WIDTH_12BIT)',
        '  return adc.read()']);
  
    var value_number = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var math_choice = block.getFieldValue('same');
    
    var code = `adcRead(34) ${math_choice} ${value_number}`;
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['poten_ifelse2'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['from_machine_import_adc'] = 'from machine import ADC';
  
    
    var branch = Blockly.Python.statementToCode(block, 'DO');
    // branch = Blockly.Python.addLoopTrap(branch, block) || Blockly.Python.PASS;
    var value_number = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var math_choice = block.getFieldValue('same');
    
  
    var code = `if adcRead(34) ${math_choice} ${value_number}: \n`;
        code += `${branch}`
    return code;
  };
  Blockly.Python['controls_every'] = function(block) {
    Blockly.Python.definitions_['import_time'] = 'import time';
    Blockly.Python.definitions_['time.ticks'] = 'start_time = time.ticks_ms()';

    
    if (block.getField('TIMES')) {
        // Internal number.
        var repeats = String(parseInt(block.getFieldValue('TIMES'), 10));
      } else {
        // External number.
        var repeats = Blockly.Python.valueToCode(block, 'TIMES',
            Blockly.Python.ORDER_NONE) || '0';
      }
      if (Blockly.isNumber(repeats)) {
        repeats = parseInt(repeats, 10);
      } else {
        repeats = 'int(' + repeats + ')';
      }
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block) || Blockly.Python.PASS;
    var loopVar = Blockly.Python.variableDB_.getDistinctName(
        'count', Blockly.VARIABLE_CATEGORY_NAME);

    

    var code = `if time.ticks_ms() - start_time >= ${repeats}: \n`;
        code += `  start_time = time.ticks_ms()\n`
        code += `${branch}`
    return code;
  };
  Blockly.Python['bool_tf'] = function(block) {
    // Negation.
    var code = 'True'
    return [code, Blockly.Python.ORDER_LOGICAL_NOT];
  };
  Blockly.Python['bool_false'] = function(block) {
    // Negation.
    var code = 'False'
    return [code, Blockly.Python.ORDER_LOGICAL_NOT];
  };
  Blockly.Python['break_code'] = function(block) {
  
  
    //var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var code = `break\n`;
    return code;
    };
    Blockly.Python['on_start'] = function(block) {
      var branch = Blockly.Python.statementToCode(block, 'DO');
      // branch = Blockly.Python.addLoopTrap(branch, block) || Blockly.Python.PASS;
  
      // ตรวจสอบว่ามีการเพิ่มช่องว่างหลังบล็อกไหม
      if (branch.endsWith(' ')) {
          branch = branch.slice(0, -1);  // ตัดช่องว่างที่ไม่ต้องการ
      }
  
      var code = branch;
      return code;
  };
          // buzzer Start ///////////////////////////////
          Blockly.Python['buzzer1'] = function(block) {
            Blockly.Python.definitions_['from_machine_import_pin_pwm_adc'] = 'from machine import Pin,PWM,ADC';
            Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
  
      
          var value_freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);
          var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  
          var functionName = Blockly.Python.provideFunction_(
            'buzzerWrite',
            [`def ` + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + `(pin, freq=1000, duty=50, stop=0):`,
            `    pwm = PWM(Pin(pin))`,
            `    pwm.freq(freq)`,
            `    pwm.duty(int(duty / 100 * 1023))`,
            `    if stop > 0:`,
            `        sleep(stop)`,
            `        pwm.duty(0)`]
        );
        
          var code = `buzzerWrite(buzzer_pin, freq=${value_freq}, stop=${value_time})\n`;
          return code;
          };
          Blockly.Python['buzzer2'] = function(block) {
            
            Blockly.Python.definitions_['from_machine_import_pin_pwm_adc'] = 'from machine import Pin,PWM,ADC';
            Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
            var functionName = Blockly.Python.provideFunction_(
              'buzzerWrite',
              [`def ` + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + `(pin, freq=1000, duty=50, stop=0):`,
              `    pwm = PWM(Pin(pin))`,
              `    pwm.freq(freq)`,
              `    pwm.duty(int(duty / 100 * 1023))`,
              `    if stop > 0:`,
              `        sleep(stop)`,
              `        pwm.duty(0)`]
          );
          var value_freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);
          var code = `buzzerWrite(buzzer_pin, freq=${value_freq})\n`;
          return code;
          };
          Blockly.Python['buzzer3'] = function(block) {
            
            Blockly.Python.definitions_['from_machine_import_pin_pwm_adc'] = 'from machine import Pin,PWM,ADC';
            Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
  
            var functionName = Blockly.Python.provideFunction_(
              'buzzerWrite',
              [`def ` + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + `(pin, freq=1000, duty=50, stop=0):`,
              `    pwm = PWM(Pin(pin))`,
              `    pwm.freq(freq)`,
              `    pwm.duty(int(duty / 100 * 1023))`,
              `    if stop > 0:`,
              `        sleep(stop)`,
              `        pwm.duty(0)`]
          );
          var code = `buzzerWrite(buzzer_pin, duty=0)\n`;
          return code;
          };
            
          Blockly.Python['buz_play_music'] = function(block) {
            Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin,PWM';
            Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
          
              //Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
          
                var select_song = block.getFieldValue('music');
    
                var functionName = Blockly.Python.provideFunction_(
                  'scale',
                  ['scale5 = [261,277,293,311,329,349,369,392,415,440,466,493,0 ,523 , 554 , 587 ,622 , 659 , 698 ,739 , 783 , 830 , 880 , 932 , 987 , 1046 ]',
                   'happy_birthday = [0 , 0 , 2 , 0 ,5 ,4 ,12, 0 ,0 , 2 ,0 ,7 ,5 ,12,0 ,0 ,13 , 9 , 5,4 ,2, 12 , 9 , 9 , 9, 5 , 7 ,5]',
                   'jingle_bell = [4,4,4,12,4,4,4,12,4,7,0,2,4,12,5,5,5,12,5,4,4,4,4,2,2,4,2,12,7]',
                   'mary_little_lamb = [4,2,0,2,4,4,4,12,2,2,2,12,4,7,7,12,4,2,0,2,4,4,4,12,0,2,2,4,2,0]',
                   'badboy = [3,5,7,12,7,3,3,12,3,5,7,5,5,7,3,12,3,5,7,12,7,3,3,12,3,5,7,5,5,7,3,12]',
                   'harry_potter =[11,17,20,19,17,12,24,22,12,19,12,17,20,19,15,12,18,11]',
                  ]
                );
    
                
              var functionName = Blockly.Python.provideFunction_(
                'buzzerWrite()',
                ['def ' + 'buzzerWrite(pin, freq=1000, duty=50, stop=0)' + ':',
                 '    pwm = PWM(Pin(pin))',
                 '    pwm.freq(freq)',
                 '    pwm.duty(int(duty / 100 * 1023))',
                 '    if stop > 0:',
                 '      sleep(stop)',
                 '      pwm.duty(0)',
                ]
              );
                code = '';;
                if(select_song == 1){
                  code = `for i in happy_birthday:\n    buzzerWrite(buzzer_pin, freq=scale5[i], stop=0.3)\n    sleep(0.1)\n`;
                }else if(select_song == 3){
                  code = `for i in jingle_bell:\n    buzzerWrite(buzzer_pin, freq=scale5[i], stop=0.3)\n    sleep(0.1)\n`;
                }else if(select_song == 4){
                  code = `for i in mary_little_lamb:\n    buzzerWrite(buzzer_pin, freq=scale5[i], stop=0.3)\n    sleep(0.1)\n`;
                }else if(select_song == 5){
                  code = `for i in badboy:\n    buzzerWrite(buzzer_pin, freq=scale5[i], stop=0.3)\n    sleep(0.1)\n`;
                }else if(select_song == 7){
                  code = `for i in harry_potter:\n    buzzerWrite(buzzer_pin, freq=scale5[i], stop=0.3)\n    sleep(0.1)\n`;
                }
                return code;
              };
      
            // buzzer End /////////////////////////////////
  
            Blockly.Python['buzzer_set_pin'] = function(block) {
              
            
             
              var buzzer_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
              
            
              var code = `buzzer_pin = ${buzzer_pin}\n`;
              return code;
            };

            Blockly.Python['set_neopi'] = function(block) {
              Blockly.Python.definitions_['from_machine_pin'] = 'from machine import Pin';
              Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';
            
              var neoon = Blockly.Python.provideFunction_(
                'neo_on',
                [`def ` + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + `():`,
                `    return np.write()`]
            );
            
             
              var neo_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
              var neo_lenght = Blockly.Python.valueToCode(block, 'lenght', Blockly.Python.ORDER_ATOMIC);
            
              var code = `np = NeoPixel(Pin(${neo_pin}, Pin.OUT), ${neo_lenght})\n`;
              return code;
            };
            Blockly.Python['neopixel_fill_color1_neo'] = function(block) {
              //Blockly.Python.definitions_['from_machine_pin'] = 'from machine import Pin';
                //Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';
              
                /*Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
                Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   
                
                Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; */
              //Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
                
                var colour_color = block.getFieldValue('color');
              
                var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colour_color);
                var red = parseInt(result[1], 16);
                var green = parseInt(result[2], 16);
                var blue = parseInt(result[3], 16);
                
                var code = `for i in range(np.n): np[i] = (${red},${green}, ${blue})\nneo_on()\n`;
                return code;
              };
              Blockly.Python['neopixel_toggle_iot'] = function(block) {
               
                Blockly.Python.definitions_['import_time'] = 'import time';
                /*Blockly.Python.definitions_['import_time'] = 'import time';
                Blockly.Python.definitions_['from_machine_pin'] = 'from machine import Pin';
                Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';
              
                Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
                Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   */
                Blockly.Python.definitions_['neo_toggle_state'] = 'np_toggle = False';   
                
                //Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; 
                
            
                
                var tog_colors1 = block.getFieldValue('tog_color1');
                var tog_colors2 = block.getFieldValue('tog_color2');
              
                var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(tog_colors1);
                var red = parseInt(result[1], 16);
                var green = parseInt(result[2], 16);
                var blue = parseInt(result[3], 16);
              
                var result2 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(tog_colors2);
                var red2 = parseInt(result2[1], 16);
                var green2 = parseInt(result2[2], 16);
                var blue2 = parseInt(result2[3], 16);
              
               
                var functionName = Blockly.Python.provideFunction_(
                  `neo_tog`,
                  [`def ` + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + `():`,
                  `  global np_toggle`,
                  `  np_toggle = not np_toggle`,
                  `  if np_toggle:`,
                  `      for i in range(np.n):`,
                  `          np[i] = (${red}, ${green}, ${blue})`,
                  `          time.sleep(0.1) `,
                  `  else:`,
                  `      np.fill((${red2}, ${green2}, ${blue2}))`,
                  `      time.sleep(0.1)`,
                  `  neo_on()`]);
              
                var code = '#while True:\nneo_tog()\n'
                //var code = `for i in range(np.n): np[i] = (${red},${green}, ${blue})\nnp.write()\n`;
                return code;
              };
              Blockly.Python['rainbow_neo_iot'] = function(block) {
                Blockly.Python.definitions_['import_time_sleep_ms'] = 'from time import sleep_ms';
                
                
                
                var functionName = Blockly.Python.provideFunction_(
                  'rainbow_neo',
                  [`def ` + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + `():`,
                  `    global np`,
                  `    global sleep_ms`,
                  `    for j in range(256):`,
                  `        for i in range(np.n):`,
                  `            WheelPos = (i * 1 + j) % 256`,
                  `            if WheelPos < 85:`,
                  `                np[i] = (int(WheelPos * 3), int(255 - WheelPos * 3), 0)`,
                  `            elif WheelPos < 170:`,
                  `                WheelPos -= 85`,
                  `                np[i] = (int(255 - WheelPos * 3), 0, int(WheelPos * 3))`,
                  `            else:`,
                  `                WheelPos -= 170`,
                  `                np[i] = (0, int(WheelPos * 3), int(255 - WheelPos * 3))`,
                  `        np.write()`,
                  `        sleep_ms(5)`]
              );
              
            
                var code = 'rainbow_neo()\n'
                
                return code;
              };
              Blockly.Python['oled_init_iot'] = function(block) {
                Blockly.Python.definitions_['from_micropython_import_const'] = 'from micropython import const';
                Blockly.Python.definitions_['import_framebuf'] = 'import framebuf';
                Blockly.Python.definitions_['import_oled'] = 'from machine import Pin, I2C';
                Blockly.Python.definitions_['import_os'] = 'import os';
                var functionName = Blockly.Python.provideFunction_(
                'register_definitions',
                [`# Register definitions`,
                `SET_CONTRAST = 0x81`,
                `SET_ENTIRE_ON = 0xA4`,
                `SET_NORM_INV = 0xA6`,
                `SET_DISP = 0xAE`,
                `SET_MEM_ADDR = 0x20`,
                `SET_COL_ADDR = 0x21`,
                `SET_PAGE_ADDR = 0x22`,
                `SET_DISP_START_LINE = 0x40`,
                `SET_SEG_REMAP = 0xA0`,
                `SET_MUX_RATIO = 0xA8`,
                `SET_COM_OUT_DIR = 0xC0`,
                `SET_DISP_OFFSET = 0xD3`,
                `SET_COM_PIN_CFG = 0xDA`,
                `SET_DISP_CLK_DIV = 0xD5`,
                `SET_PRECHARGE = 0xD9`,
                `SET_VCOM_DESEL = 0xDB`,
                `SET_CHARGE_PUMP = 0x8D`
                ]
            );
            
            var functionName = Blockly.Python.provideFunction_(
              `SSD1306`,
              [`class SSD1306(framebuf.FrameBuffer):`,
              `    def __init__(self, width, height, external_vcc):`,
              `        self.width = width`,
              `        self.height = height`,
              `        self.external_vcc = external_vcc`,
              `        self.pages = self.height // 8`,
              `        self.buffer = bytearray(self.pages * self.width)`,
              `        super().__init__(self.buffer, self.width, self.height, framebuf.MONO_VLSB)`,
              `        self.init_display()`,
              ``,
              `    def init_display(self):`,
              `        for cmd in (`,
              `            SET_DISP | 0x00,  # off`,
              `            # address setting`,
              `            SET_MEM_ADDR,`,
              `            0x00,  # horizontal`,
              `            # resolution and layout`,
              `            SET_DISP_START_LINE | 0x00,`,
              `            SET_SEG_REMAP | 0x01,  # column addr 127 mapped to SEG0`,
              `            SET_MUX_RATIO,`,
              `            self.height - 1,`,
              `            SET_COM_OUT_DIR | 0x08,  # scan from COM[N] to COM0`,
              `            SET_DISP_OFFSET,`,
              `            0x00,`,
              `            SET_COM_PIN_CFG,`,
              `            0x02 if self.width > 2 * self.height else 0x12,`,
              `            # timing and driving scheme`,
              `            SET_DISP_CLK_DIV,`,
              `            0x80,`,
              `            SET_PRECHARGE,`,
              `            0x22 if self.external_vcc else 0xF1,`,
              `            SET_VCOM_DESEL,`,
              `            0x30,  # 0.83*Vcc`,
              `            # display`,
              `            SET_CONTRAST,`,
              `            0xFF,  # maximum`,
              `            SET_ENTIRE_ON,  # output follows RAM contents`,
              `            SET_NORM_INV,  # not inverted`,
              `            # charge pump`,
              `            SET_CHARGE_PUMP,`,
              `            0x10 if self.external_vcc else 0x14,`,
              `            SET_DISP | 0x01,  # on`,
              `        ):`,
              `            self.write_cmd(cmd)`,
              `        self.fill(0)`,
              `        self.show()`,
              ``,
              `    def poweroff(self):`,
              `        self.write_cmd(SET_DISP | 0x00)`,
              ``,
              `    def poweron(self):`,
              `        self.write_cmd(SET_DISP | 0x01)`,
              ``,
              `    def contrast(self, contrast):`,
              `        self.write_cmd(SET_CONTRAST)`,
              `        self.write_cmd(contrast)`,
              ``,
              `    def invert(self, invert):`,
              `        self.write_cmd(SET_NORM_INV | (invert & 1))`,
              ``,
              `    def show(self):`,
              `        x0 = 0`,
              `        x1 = self.width - 1`,
              `        if self.width == 64:`,
              `            # displays with width of 64 pixels are shifted by 32`,
              `            x0 += 32`,
              `            x1 += 32`,
              `        self.write_cmd(SET_COL_ADDR)`,
              `        self.write_cmd(x0)`,
              `        self.write_cmd(x1)`,
              `        self.write_cmd(SET_PAGE_ADDR)`,
              `        self.write_cmd(0)`,
              `        self.write_cmd(self.pages - 1)`,
              
              `        self.write_data(self.buffer)`]
            );
            
            var functionName = Blockly.Python.provideFunction_(
              'SSD1306_I2C',
              [`class SSD1306_I2C(SSD1306):`,
              `   def __init__(self, width, height, addr=0x3C, external_vcc=False):`,
              `     machine = os.uname().machine`,
              `     if ("KidBright32" in machine) or ("KidMotor V4" in machine):`,
              `       self.i2c = I2C(1, scl=Pin(5), sda=Pin(4), freq=400000)`,
              `     elif ("Mbits" in machine) or ("OpenBIT" in machine):`,
              `       self.i2c = I2C(0, scl=Pin(21), sda=Pin(22), freq=400000)`,
              `     else:`,
              `       self.i2c = I2C(0, scl=Pin(22), sda=Pin(21), freq=400000)`,
              `     self.addr = addr`,
              `     self.temp = bytearray(2)`,
              `     self.write_list = [b"\\40", None]  `,
              `     super().__init__(width, height, external_vcc)`,
              ``,
              `   def write_cmd(self, cmd):`,
              `     self.temp[0] = 0x80  # Co=1, D/C#=0`,
              `     self.temp[1] = cmd`,
              `     self.i2c.writeto(self.addr, self.temp)`,
              ``,
              `   def write_data(self, buf):`,
              `     self.write_list[1] = buf`,
              `     self.i2c.writevto(self.addr, self.write_list)`
              ]
            );
            
               
                var dropdown_size = block.getFieldValue('size');
              
                var code = `oled = SSD1306_I2C(128, ${+dropdown_size == 0 ? 64 : 32})\n`;
                return code;
              };
              
              Blockly.Python['oled_draw_text_iot'] = function(block) {
                Blockly.Python.definitions_['import_oled'] = 'import OLEDD';
                
                var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
                var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
                var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
              
                var code = `oled.text(${value_text}, ${value_x}, ${value_y}, 1); oled.show()\n`;
                return code;
              };
              
              Blockly.Python['oled_draw_line'] = function(block) {
                Blockly.Python.definitions_['import_oled'] = 'import OLEDD';
              
                var value_x1 = Blockly.Python.valueToCode(block, 'x1', Blockly.Python.ORDER_ATOMIC);
                var value_y1 = Blockly.Python.valueToCode(block, 'y1', Blockly.Python.ORDER_ATOMIC);
                var value_x2 = Blockly.Python.valueToCode(block, 'x2', Blockly.Python.ORDER_ATOMIC);
                var value_y2 = Blockly.Python.valueToCode(block, 'y2', Blockly.Python.ORDER_ATOMIC);
              
                var code = `oled.line(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2}, 1); oled.show()\n`;
                return code;
              };
              
              Blockly.Python['oled_draw_rect'] = function(block) {
                Blockly.Python.definitions_['import_oled'] = 'import OLEDD';
              
                var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
                var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
                var value_width = Blockly.Python.valueToCode(block, 'width', Blockly.Python.ORDER_ATOMIC);
                var value_height = Blockly.Python.valueToCode(block, 'height', Blockly.Python.ORDER_ATOMIC);
                var dropdown_fill = block.getFieldValue('fill');
              
                var code = `oled.${(+dropdown_fill) ? 'fill_rect' : 'rect'}(${value_x}, ${value_y}, ${value_width}, ${value_height}, 1); oled.show()\n`;
                return code;
              };
              
              Blockly.Python['oled_fill'] = function(block) {
                var code = 'oled.fill(1); oled.show()\n';
                return code;
              };
              
              Blockly.Python['oled_clear'] = function(block) {
                var code = 'oled.fill(0); oled.show()\n';
                return code;
              };

              Blockly.Python['abs_of'] = function(block) {
                // Random integer between [X] and [Y].
                var argument0 = Blockly.Python.valueToCode(block, 'FROM',
                    Blockly.Python.ORDER_NONE);
                
                var code = 'abs(' + argument0 + ')';
                return [code, Blockly.Python.ORDER_FUNCTION_CALL];
              };
