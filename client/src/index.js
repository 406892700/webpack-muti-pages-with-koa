import Component from './component';
import './index.scss';

Component.say();

const a = 123;

class A {
  say() {
    console.log('a')
  }
}

class B extends A {
  say() {
    super.say();
  }
}

new A().say();
new B().say();
