import Component from './component';
import './index.scss';

Component.say();

class A {
    say() {
        console.log('a');
    }
}

class B extends A {
    say() {
        super.say();
    }
}

new A().say();
new B().say();
