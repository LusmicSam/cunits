import React from 'react';
import { BookOpen } from 'lucide-react';

interface PageProps {
    params: {
        unitId: string;
        lessonId: string;
    };
}

export default function LessonPage({ params }: PageProps) {
    // Extract unit and lesson numbers for display
    const unitNum = params.unitId.replace(/\D/g, '');
    const lessonNum = params.lessonId.replace(/\D/g, '');

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8">
            <div className="bg-blue-50 p-6 rounded-full mb-6 text-blue-500">
                <BookOpen size={48} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Unit {unitNum} - Lecture {lessonNum}
            </h1>
            <h2 className="text-xl text-gray-600 mb-6">Content Coming Soon</h2>
            <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
                We are currently working on developing the content for this lecture.
                Please check back later or verify your navigation.
            </p>
            <div className="mt-8 px-4 py-2 bg-gray-100 rounded-md text-sm font-mono text-gray-600">
                Route: /unit{unitNum}/L{lessonNum}
            </div>
        </div>
    );
}
