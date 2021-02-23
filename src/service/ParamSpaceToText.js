export function ParamSpaceToText(text, param) {
    return text.split(param).join(' ')
} 

export function ParamTextToSpace(text) {
    return text.split(' ').join('-')
} 