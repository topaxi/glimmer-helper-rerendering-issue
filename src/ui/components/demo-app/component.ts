import Component, { tracked } from "@glimmer/component";

export default class Demo extends Component {
  @tracked interval = 0;

  didInsertElement() {
    setInterval(() => {
      this.interval += 1;
    }, 1000);
  }
}
