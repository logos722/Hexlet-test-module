import { strict as assert} from 'node:assert';
import capitalize from "../src/capitalize.js";

test('capitalize', () => {
    expect(capitalize('hello')).toEqual('Hello');
    expect(capitalize('')).toEqual('');
});