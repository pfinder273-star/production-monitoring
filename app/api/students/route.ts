import {NextRequest, NextResponse} from 'next/server';
export async function GET(){
    const startTime = Date.now();
    try{
        console.log("students api request received");
        const students =[
            {id : 1, name: "John Doe", age: 20},
            {id : 2, name: "Jane Smith", age: 22},
            {id : 3, name: "Alice Johnson", age: 19}
        ];
        console.log("Studentfetch succesfully");
        return NextResponse.json({
            success:true,
            students, 
            duration: Date.now() - startTime,
        });
    }catch(error){
        console.error("Students API Error:",error);
        return NextResponse.json(
            {error: "internal server error"},
            {status: 500}
        );

    }
}