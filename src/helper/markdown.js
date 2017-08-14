import marked from 'marked';

export function toDangerousHTML(content) {
    return {
        __html : marked(content)
    }
}