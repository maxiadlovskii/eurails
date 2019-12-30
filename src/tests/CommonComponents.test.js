import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure  } from 'enzyme';
configure({ adapter: new Adapter() });
import { shallowToJson } from 'enzyme-to-json';
import { Button } from '../components/common/Button/Button';
import { Loader } from '../components/common/Loader/Loader';
import { Modal } from '../components/common/Modal/Modal';
import { Avatar } from '../components/common/Avatar/Avatar';
import { Failed } from '../components/common/Failed/Failed';
import { Image } from '../components/common/Image/Image';
import {skeletons, buttonProps, pictureUrl } from "./moks";

describe('Button', () => {
  it('should render correctly', () => {
    const output = shallow(
        <Button onClick={buttonProps.onClick}>{buttonProps.text}</Button>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

describe('Loader', () => {
  it('should render correctly', () => {
    const output = shallow(
        <Loader type={skeletons.LINE} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

describe('Modal', () => {
  it('should render correctly', () => {
    const output = shallow(
        <Modal isVisible={true} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

describe('Failed', () => {
  it('should render correctly', () => {
    const output = shallow(
        <Failed />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

describe('Image', () => {
  it('should render correctly', () => {
    const output = shallow(
        <Image src={pictureUrl}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

describe('Avatar', () => {
  it('should render correctly', () => {
    const output = shallow(
        <Avatar picture={pictureUrl}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});