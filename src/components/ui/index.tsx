import React, { MouseEventHandler } from "react";


interface ButtonProps {
    children: React.ReactNode,
    className?: string,
    disabled?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined,
    baseClasses?: string,
    variant?: string,
}

const Table = ({ children}: React.PropsWithChildren) => (
    <div className="w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
            {children}
        </table>
    </div>
);

export const TableHeader = ({ children }: React.PropsWithChildren) => (
    <thead>
        {children}
    </thead>
);

export const TableBody = ({ children }: React.PropsWithChildren) => {
    return <tbody>{children}</tbody>;
};

export const TableRow = ({ children }: React.PropsWithChildren) => (
    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
        {children}
    </tr>
);

export const TableHead = ({
    children,
    className,
}: React.PropsWithChildren<{ className?: string }>) => (
<th className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}>
    {children}
</th>
);

export const TableCell = ({
    children,
    className
}: React.PropsWithChildren<{ className?: string}>) => (
    <td className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`}>
        {children}
    </td>
);

export const Card = ({
    children,
    className
}: React.PropsWithChildren<{ className?: string}>) => (
    <div
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
    >
        {children}
    </div>
);


export const CardHeader = ({ children }: React.PropsWithChildren) => (
    <div
    className="flex flex-col space-y-1.5 p-6"
    >
        {children}
    </div>
);

export const CardTitle = ({ children }: React.PropsWithChildren) => (
    <h3 className="text-2xl font-semibold leading-none tracking-tight">
        {children}
    </h3>
);

export const CardContent = ({ children }: React.PropsWithChildren) => (
    <div className="p-6 pt-0">
        {children}
    </div>
);

export const Badge = ({
    children,
    variant = "default",
}: React.PropsWithChildren<{variant?: "default" | "success" | "destructive";}>) => {
    const variantClasses = {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        success: "bg-green-500 text-white",
        destructive: "bg-red-500 text-white",
    };

    return (
        <span
        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs 
            font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variantClasses[variant]}`}
        >
            {children}
        </span>
    )
}


export const OrderPageButton = ({children, onClick, baseClasses, variant, className}: ButtonProps) => {

    const variantClasses = {
    default: "bg-black text-white hover:bg-black/80",
    delete: "bg-red-600 text-white hover:bg-red-700",
    demo: "bg-blue-600 text-white hover:bg-blue-700"
} as const;

const selectedVariant = variant ?? "default";

return (
    <button
        onClick={onClick}
        className={`${baseClasses} ${variantClasses[selectedVariant]} ${className}`}
    >
        {children}
    </button>
);
}



export default Table;