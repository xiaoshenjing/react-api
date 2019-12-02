import http from './base'

export function getContent(){
    http.get('helpContent')
}