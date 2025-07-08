import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ message: 'No file uploaded.' }, { status: 400 });
    }

    // Log image information
    console.log('Image received:');
    console.log(`  Name: ${file.name}`);
    console.log(`  Size: ${file.size} bytes`);
    console.log(`  Type: ${file.type}`);

    // In a real application, you would process the image here.
    // For example, save it to a storage service, analyze it with an AI model, etc.

    // For now, return a success message with some image metadata
    return NextResponse.json({
      message: 'Image processed successfully!',
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
    });

  } catch (error) {
    console.error('Error processing upload:', error);
    return NextResponse.json({ message: 'Error processing upload.' }, { status: 500 });
  }
}
