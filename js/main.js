(() => {

    let yOffset = 0;

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
        console.log(yOffset);
    }
    
    window.addEventListener('resize', setLayout);
    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset;
        scrollLoop();
    })
    setLayout();
})();