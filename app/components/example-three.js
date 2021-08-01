import Component from '@glimmer/component';
import { task } from 'ember-concurrency';
import { getRandNum } from '../utils/geRandNum';

export default class ExampleThreeComponent extends Component {
  @task({ keepLatest: true })
  *getNumberTask() {
    const randNum = yield getRandNum();
    console.log('Received: ', randNum);
    return randNum;
  }
}
