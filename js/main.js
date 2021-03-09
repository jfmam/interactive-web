(() => {

    let yOffset = 0;
    let prevScrollHeight = 0; // 현재 스크롤 위치 보다 이전에 위치한 스크롤섹션들의 높이 합
    let currentScene = 0 // 현재 활성화 된 씬

    const sceneInfo = [
        {
            type: 'sticky',
            scrollHeight: 0,
            heightLen: 5, // 브라우저 높의의 5배로 scrollHeight 설정(반응형)
            objs: {
                container: document.querySelector('#scroll-section-0')
            }
        },
        {
            type: 'normal',
            scrollHeight: 0,
            heightLen: 5, // 브라우저 높의의 5배로 scrollHeight 설정(반응형)
            objs: {
                container: document.querySelector('#scroll-section-1')
            }
        },
        {
            type: 'sticky',
            scrollHeight: 0,
            heightLen: 5, // 브라우저 높의의 5배로 scrollHeight 설정(반응형)
            objs: {
                container: document.querySelector('#scroll-section-2')
            }
        },
        {
            type: 'sticky',
            scrollHeight: 0,
            heightLen: 5, // 브라우저 높의의 5배로 scrollHeight 설정(반응형)
            objs: {
                container: document.querySelector('#scroll-section-3')
            }
        },        

    ]

    function setLayout() {
        //각 스크롤 섹션의 높이 세팅
        for (let i =0; i <sceneInfo.length; i++) {
            sceneInfo[i].scrollHeight = sceneInfo[i].heightLen * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }

        console.log(sceneInfo);
    }

    function scrollLoop() {
        //현재 스크롤 위치
        prevScrollHeight = 0; // 이전 씬의 위치
        for(let i =0; i< currentScene; i++) {
            prevScrollHeight += sceneInfo[i].scrollHeight
        }

        // console.log('prevScrollHeight',prevScrollHeight)
        if(yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
            currentScene ++;
        }
        if(yOffset < prevScrollHeight) {
            currentScene--;
        }
        console.log(currentScene)
    }
    
    window.addEventListener('resize', setLayout);
    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset;
        scrollLoop();
    })
    setLayout();
})();