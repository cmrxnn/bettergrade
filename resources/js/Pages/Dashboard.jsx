import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Dashboard(props) {
    const name = props.auth.user.name;

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <h2 className="text-4xl text-center p-6 text-gray-900">Welcome back, {name.charAt(0).toUpperCase() + name.slice(1)}!</h2>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
