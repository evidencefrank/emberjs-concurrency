import Component from '@glimmer/component';
import { task } from 'ember-concurrency';
import { action } from '@ember/object';
import { getRandNum } from '../utils/geRandNum';

export default class ExampleFourComponent extends Component {
  @task({ keepLatest: true })
  *getNumberTask() {
    this.hasError = false;
    const randNum = yield getRandNum();
    if (randNum > 50) {
      throw new Error('Something wrong!');
    }
    console.log('Received: ', randNum);
    return randNum;
  }

  @action
  cancel() {
    this.getNumberTask.cancelAll();
  }
}
