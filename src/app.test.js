import {render, screen,cleanup} from '@testing-library/react'
import NavBar from './components/navbar'
import '@testing-library/jest-dom/extend-expect';
import Counters from './components/counters';
import Counter from './components/counter';


afterEach(() => {
  cleanup();
})

beforeEach(() => {
  cleanup();
})

test('sample test', () => { 
  expect(true).toBe(true)
 })
 

 test('test NavBar with Zero Items', () => {
  const counters = 0
  render(<NavBar totalCounters={counters}/>)
  const navBar = screen.getByTestId('navBar');
  expect(navBar).toBeInTheDocument();
  expect(navBar).toHaveTextContent(`Items`);
  expect(navBar).not.toHaveTextContent(`4`);
 })

 
 test('test NavBar with non-Zero Items', () => {
  const counters = 5
  render(<NavBar totalCounters={counters}/>)
  const navBar = screen.getByTestId('navBar');
  expect(navBar).toBeInTheDocument();
  expect(navBar).toHaveTextContent(`Items`);
  expect(navBar).not.toHaveTextContent(`0`);
  expect(navBar).toHaveTextContent(`5`);
 })

 test('test Counter', () => {
  const counter =  { id: 1, value: 0 }
  render(<Counter counter={counter}/>)
  const counterDiv = screen.getByTestId('counter');
  expect(counterDiv).toBeInTheDocument();
  expect(counterDiv).toHaveTextContent(`Zero`);
 })

 test('test Counter with non-zero value', () => {
  const counter =  { id: 1, value: 3 }
  render(<Counter counter={counter}/>)
  const counterDiv = screen.getByTestId('counter');
  expect(counterDiv).toBeInTheDocument();
  expect(counterDiv).not.toHaveTextContent(`Zero`);
  expect(counterDiv).toHaveTextContent(counter.value);

 })