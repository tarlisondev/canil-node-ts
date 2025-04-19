
type Options = '' | 'all' | 'dog' | 'cat' | 'fish'

export default ({
    create: (active: Options) => {
        let object = {
            all: false,
            dog: false,
            cat: false,
            fish: false,
        }

        if(active != '') object[active] = true;

        return object;  
    }
})