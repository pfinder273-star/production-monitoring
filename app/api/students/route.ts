import {NextRequest, NextResponse} from 'next/server';
export async function GET(){
    const startTime = Date.now();
    try{
        console.log("students api request received"):
        const students =[
            {id : 1, name: "John Doe", age: 20},
            {id : 2, name: "Jane Smith", age: 22},
        ]
    }
}