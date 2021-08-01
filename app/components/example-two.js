import Component from '@glimmer/component';
import { task } from 'ember-concurrency';
import { getRandNum } from '../utils/geRandNum';

export default class ExampleTwoComponent extends Component {
  @task
  *getNumberTask() {
    return yield getRandNum();
  }
}
