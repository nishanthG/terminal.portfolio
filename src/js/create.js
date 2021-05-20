export function create(element, classname, id){
    var p_tag = document.createElement(element);
    var p_text = document.createTextNode("");
    p_tag.appendChild(p_text);
    p_tag.classList.add(id);

    var created_element = document.querySelector(classname);
    created_element.appendChild(p_tag);
}