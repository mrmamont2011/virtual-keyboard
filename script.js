let { lang } = window.sessionStorage;
if (!(lang !== undefined)) { lang = 'ENG'; }
let OnShift = false;
let OnCapsLock = false;



const Keyboard_arr = [

    ['`', '~', 'ё', 'Ё', 'Backquote', 1, 'key_40px'],
    ['1', '!', '1', '!', 'Digit1', 1 , 'key_40px'],
    ['2', '@', '2', '"', 'Digit2', 1, 'key_40px'],
    ['3', '#', '3', '№', 'Digit3', 1, 'key_40px'],
    ['4', '$', '4', ';', 'Digit4', 1, 'key_40px'],
    ['5', '%', '5', '%', 'Digit5', 1, 'key_40px'],
    ['6', '^', '6', ':', 'Digit6', 1, 'key_40px'],
    ['7', '&', '7', '?', 'Digit7', 1, 'key_40px'],
    ['8', '*', '8', '*', 'Digit8', 1, 'key_40px'],
    ['9', '(', '9', '(', 'Digit9', 1, 'key_40px'],
    ['0', ')', '0', ')', 'Digit0', 1, 'key_40px'],
    ['-', '_', '-', '_', 'Minus', 1, 'key_40px'],
    ['=', '+', '=', '+', 'Equal', 1, 'key_40px'],
    ['Backspace', 'Backspace','Backspace','Backspace','Backspace', 1, 'key_100px'],
    ['Tab','Tab','Tab','Tab', 'Tab', 2, 'key_50px', '\t'],
    ['q', 'Q', 'й', 'Й', 'KeyQ', 2, 'key_40px'],
    ['w', 'W', 'ц', 'Ц', 'KeyW', 2, 'key_40px'],
    ['e', 'E', 'у', 'У', 'KeyE', 2, 'key_40px'],
    ['r', 'R', 'к', 'R', 'KeyR', 2, 'key_40px'],
    ['t', 'T', 'е', 'Е', 'KeyT', 2, 'key_40px'],
    ['y', 'Y', 'н', 'Н', 'KeyY', 2, 'key_40px'],
    ['u', 'U', 'г', 'Г', 'KeyU', 2, 'key_40px'],
    ['i', 'I', 'ш', 'Ш', 'KeyI', 2, 'key_40px'],
    ['o', 'O', 'щ', 'Щ', 'KeyO', 2, 'key_40px'],
    ['p', 'P', 'з', 'З', 'KeyP', 2, 'key_40px'],
    ['[', '{', 'х', 'Х', 'BracketLeft', 2, 'key_40px'],
    [']', '}', 'ъ', 'Ъ', 'BracketRight', 2, 'key_40px'],
    ['\\', '|', '\\', '/', 'Backslash', 2, 'key_90px'],
    ['Caps Lock', 'Caps Lock', 'Caps Lock','Caps Lock','CapsLock', 3, 'key_100px'],
    ['a', 'A', 'ф', 'Ф', 'KeyA', 3, 'key_40px'],
    ['s', 'S', 'ы', 'Ы', 'KeyS', 3, 'key_40px'],
    ['d', 'D', 'в', 'В', 'KeyD', 3, 'key_40px'],
    ['f', 'F', 'а', 'А', 'KeyF', 3, 'key_40px'],
    ['g', 'G', 'п', 'П', 'KeyG', 3, 'key_40px'],
    ['h', 'H', 'р', 'Р', 'KeyH', 3, 'key_40px'],
    ['j', 'J', 'о', 'О', 'KeyJ', 3, 'key_40px'],
    ['k', 'K', 'л', 'Л', 'KeyK', 3, 'key_40px'],
    ['l', 'L', 'д', 'Д', 'KeyL', 3, 'key_40px'],
    [';', ':', 'ж', 'Ж', 'Semicolon', 3, 'key_40px'],
    ["'", '"', 'э', 'Э', 'Quote', 3, 'key_40px'],
    ['Enter', 'Enter', 'Enter', 'Enter', 'Enter', 3, 'key_86px','\n'],
    ['Shift', 'Shift', 'Shift', 'Shift', 'ShiftLeft', 4, 'key_100px'],
    ['z', 'Z', 'я', 'Я', 'KeyZ', 4, 'key_40px'],
    ['x', 'X', 'ч', 'Ч', 'KeyX', 4, 'key_40px'],
    ['c', 'C', 'с', 'С', 'KeyC', 4, 'key_40px'],
    ['v', 'V', 'м', 'М', 'KeyV', 4, 'key_40px'],
    ['b', 'B', 'и', 'И', 'KeyB', 4, 'key_40px'],
    ['n', 'N', 'т', 'Т', 'KeyN', 4, 'key_40px'],
    ['m', 'M', 'ь', 'Ь', 'KeyM', 4, 'key_40px'],
    [',', '<', 'б', 'Б', 'Comma', 4, 'key_40px'],
    ['.', '>', 'ю', 'Ю', 'Period', 4, 'key_40px'],
    ['/', '?', '.', ',', 'Slash', 4, 'key_40px'],
    ['↑', '↑', '↑', '↑', 'ArrowUp', 4, 'key_40px'],
    ['Shift','Shift','Shift','Shift','ShiftRight', 4, 'key_40px'],
    ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'ControlLeft', 5, 'key_100px'],
    ['Alt','Alt','Alt','Alt', 'AltLeft', 5, 'key_40px'],
    [' ', ' ', ' ', ' ', 'Space', 5, 'key_292px'],
    ['Alt','Alt','Alt','Alt', 'AltRight', 5, 'key_40px'],  
    ['Ctrl', 'Ctrl','Ctrl','Ctrl', 'ControlRight', 5, 'key_60px'],
    ['←', '←', '←', '←', 'ArrowLeft', 5, 'key_40px'], 
    ['↓', '↓', '↓', '↓', 'ArrowDown', 5,'key_40px'], 
    ['→', '→', '→', '→', 'ArrowRight', 5,'key_40px'], 
];
  

function createTextArea() {
    const section= document.createElement('section');
    section.className = 'container';
    document.body.append(section);
    const textArea = document.createElement('textarea');
    textArea.id = 'textarea';
    textArea.rows = '15';
    textArea.cols = '60';
    textArea.setAttribute('readonly', 'readonly');
    document.getElementsByClassName('container')[0].prepend(textArea);
    const creatKeyboard = document.createElement('div');
    creatKeyboard.id = 'key';
    document.getElementById('textarea').after(creatKeyboard);
    const comment = document.createElement('p');
    comment.innerHTML = 'Клавиатура для Windows. Смена языка (ALT + SHIFT) слева ';
    document.getElementById('key').after(comment);
  }



  function draw_line(line) {
    let oneKey;
    
        for (j=0;j<Keyboard_arr.length;j++){       
            
            if (Keyboard_arr[j][5]===line) {
                
                oneKey = document.createElement('div');
                document.getElementById(`line_${line}`).append(oneKey);
                oneKey.className = Keyboard_arr[j][6] + ' keyOff';
                oneKey.keyEng = Keyboard_arr[j][0];
                oneKey.keyUpEng = Keyboard_arr[j][1];
                oneKey.keyRu = Keyboard_arr[j][2];
                oneKey.keyUpRu = Keyboard_arr[j][3];
                oneKey.id = Keyboard_arr[j][4];
            
            }
        
        }
     
  }
  
  function drawKeyboard() {
    let lineKey = [];
    for (let i = 1; i < 6; i += 1) {
     
      lineKey[i] = document.createElement('div');
      lineKey[i].id = `line_${i}`;
      lineKey[i].className = 'lineKey';
      document.getElementById('key').append(lineKey[i]);
      draw_line(i);
      
    }
  }


  function drawLetter() {
    
    const KEYBOARD = document.getElementById('key');
    
    if (!OnShift && lang === 'ENG' && !OnCapsLock) {
      KEYBOARD.querySelectorAll('.lineKey>div').forEach((el) => { el.textContent = el.keyEng; });
    } else if (!OnShift && lang === 'ENG' && OnCapsLock) {
      KEYBOARD.querySelectorAll('.lineKey>div').forEach((el) => { el.textContent = el.keyUpEng; });
    } else if (OnShift && lang === 'ENG' && OnCapsLock) {
      KEYBOARD.querySelectorAll('.lineKey>div').forEach((el) => { el.textContent = el.keyEng; });
    } else if (OnShift && lang === 'ENG' && !OnCapsLock) {
      KEYBOARD.querySelectorAll('.lineKey>div').forEach((el) => { el.textContent = el.keyUpEng; });
    } else if (!OnShift && lang === 'RUS' && !OnCapsLock) {
      KEYBOARD.querySelectorAll('.lineKey>div').forEach((el) => { el.textContent = el.keyRu; });
    } else if (!OnShift && lang === 'RUS'  && OnCapsLock) {
      KEYBOARD.querySelectorAll('.lineKey>div').forEach((el) => { el.textContent = el.keyUpRu; });
    } else if (OnShift && lang === 'RUS' && OnCapsLock) {
      KEYBOARD.querySelectorAll('.lineKey>div').forEach((el) => { el.textContent = el.keyRu; });
    } else if (OnShift && lang === 'RUS' && !OnCapsLock) {
      KEYBOARD.querySelectorAll('.lineKey>div').forEach((el) => { el.textContent = el.keyUpRu; });
    }

}

function mouseOnShift() {
    document.getElementById('ShiftLeft').addEventListener('mousedown', () => {
      OnShift = true;
      drawLetter();
    });
    document.getElementById('ShiftLeft').addEventListener('mouseup', () => {
      OnShift = false;
      drawLetter();
    });
    document.getElementById('ShiftRight').addEventListener('mousedown', () => {
      OnShift = true;
      drawLetter();
    });
    document.getElementById('ShiftRight').addEventListener('mouseup', () => {
      OnShift = false;
      drawLetter();
    });
  }
  
  function switchLang() {
    let pushKey = [];
    document.addEventListener('keydown', (event) => {
      pushKey.push(event.code);
      if ((pushKey[0] === 'ShiftLeft' && pushKey[1] === 'AltLeft') || (pushKey[1] === 'ShiftLeft' && pushKey[0] === 'AltLeft')) {
        lang = lang === 'RUS' ? 'ENG' : 'RUS';
        window.sessionStorage.lang = lang;
        drawLetter();
      }
    });
    
    document.addEventListener('keyup', () => {
        pushKey = [];
    });
  }
  
  function onCapsLock() {
    document.getElementById('CapsLock').addEventListener('click', () => {
      OnCapsLock = !(OnCapsLock);
      drawLetter();
      if (OnCapsLock) {
        document.getElementById('CapsLock').classList.add('OnCapsLock');
      } else {
        document.getElementById('CapsLock').classList.remove('OnCapsLock');
      }
    });
  }
  


  
  function enterText() {
    document.getElementById('key').addEventListener('click',(event) =>{
        
        document.getElementById('key').querySelectorAll('.lineKey>div').forEach((el) => {
                
            
                if (event.target.id === el.id && el.id === 'Backspace' ) {
                    document.getElementById('textarea').value = document.getElementById('textarea').value.slice(0, -1);
                }
                
                
                if (event.target.id === el.id && el.id !== 'Backspace') {
                    if (el.id === 'Enter') { document.getElementById('textarea').value += '\n';
                    } else if (el.id === 'Tab') {document.getElementById('textarea').value += '\t';
                    } else {
                    document.getElementById('textarea').value += el.textContent;
                    }
                }
        });

    });
    
    

  }


  



function startJs() {
    createTextArea(); 
    drawKeyboard();
    drawLetter();
    mouseOnShift(); 
    switchLang();
    enterText();
    onCapsLock();
  
   
   
    
  }
  
  window.onload = startJs;
  