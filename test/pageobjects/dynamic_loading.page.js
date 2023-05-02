import Page from './page.js'

class dynamicPage extends Page {
    // selectors
    get startButton () {
        return $('//*[@id="start"]/button')
    }
    get helloWorld () {
        return $('//*[@id="finish"]/h4')
    }
    //methods

    open () {
        return super.open('dynamic_loading/2');
    }
}

export default new dynamicPage()