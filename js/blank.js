(() => {
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
    
    let yOffset = 0;
    const scrollLoop = () => {
        // console.log(window.pageYOffset) 현재 스크롤의 위치를 반환한다.
    }
    
    window.addEventListener('resize', setLayout)
    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset;
        scrollLoop();
    })
    setLayout();
})()