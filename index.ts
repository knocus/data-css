function dataCSS(attribute:string, wrapper?:string) {
    var s = document.querySelectorAll(`[data-${attribute}]`);
    s.forEach((elem:any) => {
        let u = elem.getAttribute("data-" + attribute);
        if (wrapper) {
            elem.style[attribute] = `${wrapper}(${u})`;
        } else {
            elem.style[attribute] = u;
        }
    })
}


const init = () => { 
    var CSSAttributes = window.getComputedStyle(window.document.body)
    let attributes = Object.keys(CSSAttributes);
    for(let i=0; i < attributes.length; i++){

        const attribute = CSSAttributes[attributes[i] as any];
        switch(attribute){
            case 'background-image':
                dataCSS(attribute, 'url');
            default:
                dataCSS(attribute);
        }
    }
}

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        init();
    }
}