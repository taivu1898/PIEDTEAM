const fullname: string = 'Diep dep trai'

type Handle = () => Promise<string>

const handleF = () => Promise.resolve(fullname + 'ahihi')

handleF().then((value) => {
  console.log(value)
})

let person: { name: string; age: number } = {
  name: 'diep',
  age: 15
}
