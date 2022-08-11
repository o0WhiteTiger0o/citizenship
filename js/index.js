/*
---------------------------DATA-------------------
*/
const iframe_Link = {
    page1 :'name'
}
/* end data*/

const getSection = document.querySelector('section');

function create_page_func(src){
    const create_div = document.createElement('div');
    const create_h1 = document.createElement('h1');
    getSection.appendChild(create_div);
    getSection.appendChild(create_h1);
    const add_text = create_h1.textContent(src);
    return add_text;

}

create_page_func('ta la zai');