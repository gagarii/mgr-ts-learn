// primitive data type
const a: number = 1;

// Type 'number' is not assignable to type 'string'.
// const b: string = a;
const b: string = "1";

// --strictNullChecks
const c: null = null;
/**
 * --strictNullChecks がtrueならば、以下のエラーが出力。
 * Type 'null' is not assignable to type 'string'.
 * 
 * このオプションをtrueにするには、tsconfig.jsonにて定義を記述。
 */
//const d: string = c;