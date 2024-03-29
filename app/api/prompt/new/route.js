import { connecttoDB } from "@/utils/database";
import Prompt from '@/models/prompt';

export const POST = async (req,res) => {
    const {prompt,userId,tag} = await req.json();
    try {
        await connecttoDB();
        const newPrompt = new Prompt({
            creator: userId,
            prompt: prompt,
            tag: tag,
        });

        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt),{status:201})

    } catch (error) {
        console.log(error)
        return new Response("Failed to create a new response",{status: 500})
    }
}