function decamelize(key:string){
    let decamelized = "";
    const low = key.toLowerCase();
    for(let i=0; i < low.length + 1; i++){
        if(i === low.length ){
            return decamelized;
        }
        if(key[i] !== low[i]){
            decamelized += "-" + low[i];
        } else {
            decamelized+=low[i];
        }
    }

    return decamelized;
}

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

        const attribute = decamelize(CSSAttributes[attributes[i] as any]);
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