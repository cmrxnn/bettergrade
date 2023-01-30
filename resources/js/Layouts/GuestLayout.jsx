export default ({ children }) => {
    return (
        <div className="bg-gradient-to-r from-cyan-400 to-gray-700 grid h-screen lg:grid-cols-2 place-items-center">
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-gray-200 shadow-lg overflow-hidden sm:rounded-lg">
                {children}
            </div>
            <div className="invisible lg:visible text-right font-mono">
                <p className="text-7xl font-bold text-white mr-10">Welcome to <span className="text-cyan-400">BetterGrade</span></p>
                <p className="text-3xl font-semibold text-gray-400 mr-10">Revision material for A-level Economics students</p>
            </div>
        </div>
    );
}
