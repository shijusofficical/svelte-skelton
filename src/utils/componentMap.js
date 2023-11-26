import Header from '$components/header/header.svelte'
import Footer from '$components/footer/footer.svelte'

export function getComponent (componentName){
    const componentMap = {
        "header": {
            component: Header
        },
        "footer": {
            component: Footer
        }
        
    }
    return componentMap[componentName].component;
}