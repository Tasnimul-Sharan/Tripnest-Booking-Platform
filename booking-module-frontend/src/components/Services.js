import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

const Services = () => {
    const { register, control, handleSubmit, reset } = useForm({
        defaultValues: {
            services: [{ name: "" }]
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "services"
    });

    const [submittedServices, setSubmittedServices] = useState([]);

    const onSubmit = data => {
        setSubmittedServices(prevServices => [...prevServices, ...data.services]);
        reset();
    };

    return (
        <div className="max-w-xl mx-auto p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {fields.map((item, index) => (
                    <div key={item.id} className="flex items-center space-x-2">
                        <input
                            {...register(`services.${index}.name`, { required: true })}
                            placeholder="Service Name"
                            className="w-full p-2 border rounded-md"
                        />
                        <button 
                            type="button" 
                            onClick={() => remove(index)} 
                            className="p-2 bg-red-500 text-white rounded-md"
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <div className="flex space-x-2">
                    <button 
                        type="button" 
                        onClick={() => append({ name: "" })} 
                        className="p-2 bg-blue-500 text-white rounded-md"
                    >
                        Add Service
                    </button>
                    <button type="submit" className="p-2 bg-green-500 text-white rounded-md">
                        Submit
                    </button>
                </div>
            </form>

            <div className="mt-6">
                <h2 className="text-lg font-semibold mb-4">Submitted Services:</h2>
                <ul className="space-y-2">
                    {submittedServices.map((service, index) => (
                        <li key={index} className="p-2 border rounded-md bg-gray-100">
                            {service.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Services;


// import React, { useState } from 'react';
// import { useForm, useFieldArray } from 'react-hook-form';

// const Services = () => {
//     const { register, control, handleSubmit } = useForm({
//         defaultValues: {
//             services: [{ name: "" }]
//         }
//     });

//     const { fields, append, remove, update } = useFieldArray({
//         control,
//         name: "services"
//     });

//     const [submittedServices, setSubmittedServices] = useState([]);

//     const onSubmit = data => {
//         setSubmittedServices(data.services);
//     };

//     return (
//         <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//             <h1 className="text-2xl font-bold mb-4 text-center">Add Your Services</h1>
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//                 {fields.map((item, index) => (
//                     <div key={item.id} className="flex items-center space-x-4">
//                         <input
//                             {...register(`services.${index}.name`, { required: true })}
//                             placeholder="Enter service name"
//                             onBlur={() => update(index, { name: item.name })}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
//                         />
//                         <button 
//                             type="button" 
//                             onClick={() => remove(index)} 
//                             className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
//                         >
//                             Remove
//                         </button>
//                     </div>
//                 ))}
//                 <div className="flex justify-between">
//                     <button 
//                         type="button" 
//                         onClick={() => append({ name: "" })} 
//                         className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//                     >
//                         Add Another Service
//                     </button>
//                     <button 
//                         type="submit" 
//                         className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
//                     >
//                         Save Services
//                     </button>
//                 </div>
//             </form>

//             <div className="mt-8">
//                 <h2 className="text-xl font-semibold mb-4">Your Services:</h2>
//                 {submittedServices.length > 0 ? (
//                     <ul className="space-y-4">
//                         {submittedServices.map((service, index) => (
//                             <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
//                                 {service.name}
//                             </li>
//                         ))}
//                     </ul>
//                 ) : (
//                     <p className="text-gray-500">No services added yet.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Services;

