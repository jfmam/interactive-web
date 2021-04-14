(() => {
    let yOffset; // window.pageYoffset
    let prevScrollHeight = 0 // 현재스크롤 위치보다 이전에 위치한 스크롤의 값
    let currentScene = 0; // 현재 활성화 된 screen

    const sceneInfo = [
        {
            type: 'sticky',
            scrollHeight: 0, // 스크롤의 높이 조정
            heightNum: 5, // 디바이스(브라우저)의 높이의 5배로 scrollHeight 설정
            objs: {
                container: document.querySelector('#scroll-section-0'),
                messageA: document.querySelector('#scroll-section-0 .main-message.a'),
                messageB: document.querySelector('#scroll-section-0 .main-message.b'),
                messageC: document.querySelector('#scroll-section-0 .main-message.c'),
                messageD: document.querySelector('#scroll-section-0 .main-message.d'),
            },
            values: { //css조작을 위한 object
                messageA_opacity:[0, 1]
            }
        },
        {
            type: 'normal',
            scrollHeight: 0, // 스크롤의 높이 조정
            heightNum: 5, // 디바이스(브라우저)의 높이의 5배로 scrollHeight 설정
             objs: {
                container: document.querySelector('#scroll-section-1'),
            }
        },
        {
            type: 'sticky',
            scrollHeight: 0, // 스크롤의 높이 조정
            heightNum: 5, // 디바이스(브라우저)의 높이의 5배로 scrollHeight 설정
             objs: {
                container: document.querySelector('#scroll-section-2'),
            }
        },
        {
            type: 'normal',
            scrollHeight: 0, // 스크롤의 높이 조정
            heightNum: 5, // 디바이스(브라우저)의 높이의 5배로 scrollHeight 설정
             objs: {
                container: document.querySelector('#scroll-section-3'),
            }
        },
    ]

    //각 스크롤 섹션의 높이를 세팅
    const setLayout = () => {
        for (let i = 0; i <sceneInfo.length; i++) {
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`
        }

        yOffset = pageYOffset;
        let totaScrollHeight = 0;
        for(let i =0; i<sceneInfo.length; i++) {
            totaScrollHeight += sceneInfo[i].scrollHeight;
            if (totaScrollHeight >= yOffset) {
                currentScene = i;
                break;
            }
            document.body.setAttribute("id", `show-scene-${currentScene}`)
        }
    }

    function playAnimation() {
        switch (currentScene) {
            case 0 :
                break;
            case 1 :
                break;
            case 2 :
                break;
            case 3 :
                break;
        }
    }
    
    const scrollLoop = () => {
        prevScrollHeight = 0;
        for(let i =0; i < currentScene; i++) {
           prevScrollHeight += sceneInfo[i].scrollHeight;
       }

       if(yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
           currentScene++;
            document.body.setAttribute("id", `show-scene-${currentScene}`);
       } 

       if(yOffset < prevScrollHeight) {
           if(currentScene === 0) {
               return;
           }

           currentScene--;
           document.body.setAttribute("id", `show-scene-${currentScene}`);
        }

        playAnimation();
    }

    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset; // 현재 layout의 y 위치
        scrollLoop();
    })
    
    window.addEventListener('resize', setLayout);
    window.addEventListener('load', setLayout);
    setLayout();
})()