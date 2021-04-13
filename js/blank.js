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
    }
    
    const scrollLoop = () => {
        prevScrollHeight = 0;
        for(let i =0; i < currentScene; i++) {
           prevScrollHeight += sceneInfo[i].scrollHeight;
       }

       if(yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
           currentScene++;
       } 

       if(yOffset < prevScrollHeight) {
           if(currentScene === 0) {
               return;
           }

           currentScene--;
       }

       document.body.setAttribute("id", `scroll-section-${currentScene}`)
    }
    
    window.addEventListener('resize', setLayout)
    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset; // 현재 layout의 y 위치
        scrollLoop();
    })
    setLayout();
})()