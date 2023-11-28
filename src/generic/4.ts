/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Class {
  title: string
}

class Component<T> {
  constructor(public props: T) {
  }
}

class Page extends Component<Class> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export { };